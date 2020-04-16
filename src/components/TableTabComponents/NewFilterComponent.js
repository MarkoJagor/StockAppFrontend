import React from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import styles from "../../componentStyles/FilterComponentStyle.module.css";
import {InputText} from "primereact/inputtext";

class NewFilterComponent extends React.Component {

    filterResult() {
        setTimeout(() => {

            const priceMin = (this.props.filterInputs.priceMin === "") ? 0 : this.props.filterInputs.priceMin;
            const priceMax = (this.props.filterInputs.priceMax === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
                return (obj.financialsDaily.price + 1)
            })) : this.props.filterInputs.priceMax;

            this.setState({
                filteredList: this.props.tickerData.filter(obj => {
                    return ((obj.financialsDaily.price != null) && (obj.financialsDaily.price > priceMin) && obj.financialsDaily.price < priceMax)
                })
            })
            this.props.filterTableData(this.state.filteredList)
        }, 1000)


        setTimeout(() => {
            console.log(this.state.filteredList);
        }, 1500)
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    };

    handleChange = e => {
        this.props.handleFilterInputChange && this.props.handleFilterInputChange(e)
        this.filterResult()
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
                        style={{width: '75%'}}
                        modal={true}
                        onHide={e => {
                            this.onClose(e)
                        }}
                        footer={footer}>

                    <div className={styles.col1}>
                        Price
                        <InputText id="priceMin"
                                   value={this.props.filterInputs.priceMin}
                                   name="priceMin"
                                   onChange={this.handleChange}
                                   style={{margin: "0 5px", width: "100px"}}
                        />
                        -
                        <InputText id="priceMax"
                                   value={this.props.filterInputs.priceMax}
                                   name="priceMax"
                                   onChange={this.handleChange}
                                   style={{marginLeft: "5px", width: "100px"}}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default NewFilterComponent