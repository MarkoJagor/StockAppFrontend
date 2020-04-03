import React from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import styles from "../componentStyles/FilterComponentStyle.module.css"


class FilterComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            filteredList: [],
            p_eInputMin: "",
            p_eInputMax: "",
            epsInputMin: "",
            epsInputMax: ""
        }
    }

    filterResult() {
        setTimeout(() => {

            const p_eMin = (this.state.p_eInputMin === "") ? 0 : this.state.p_eInputMin;

            const p_eMax = (this.state.p_eInputMax === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
                return (obj.p_e + 1)
            })) : this.state.p_eInputMax;

            const epsMin = (this.state.epsInputMin === "") ? Math.min.apply(Math, this.props.tickerData.map(obj => {
                return (obj.eps - 1)
            })) : this.state.epsInputMin;
            console.log(epsMin)

            const epsMax = (this.state.epsInputMax === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
                return (obj.eps + 1)
            })) : this.state.epsInputMax;


            this.setState({
                filteredList: this.props.tickerData.filter(obj => {
                    return ((obj.p_e != null) && (obj.p_e > p_eMin) && (obj.p_e < p_eMax) &&
                        (obj.eps != null) && (obj.eps > epsMin) && (obj.eps < epsMax))
                })
            });

            console.log(this.state.filteredList);
            this.props.filterTableData(this.state.filteredList)
        }, 1000)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.filterResult()
    };

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    };

    render() {

        const footer = (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={this.onClose}/>
            </div>
        );


        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <Dialog header="Choose filters"
                        visible={this.props.show}
                        style={{width: '50%'}}
                        modal={true}
                        onHide={e => {
                            this.onClose(e)
                        }}
                        footer={footer}>

                    <div className={styles.col1}>
                        Price to Earnings
                        <InputText id="p/e"
                                   value={this.state.p_eInputMin}
                                   name="p_eInputMin"
                                   onChange={this.handleChange}
                                   style={{margin: "0 5px", width: "100px"}}
                        />
                        -
                        <InputText id="p/e"
                                   value={this.state.p_eInputMax}
                                   name="p_eInputMax"
                                   onChange={this.handleChange}
                                   style={{marginLeft: "5px", width: "100px"}}
                        />
                    </div>

                    <div className={styles.col2}>
                        Earnings per Share
                        <InputText id="eps"
                                   value={this.state.epsInputMin}
                                   name="epsInputMin"
                                   onChange={this.handleChange}
                                   style={{margin: "0 5px", width: "100px"}}
                        />
                        -
                        <InputText id="eps"
                                   value={this.state.epsInputMax}
                                   name="epsInputMax"
                                   onChange={this.handleChange}
                                   style={{marginLeft: "5px", width: "100px"}}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default FilterComponent