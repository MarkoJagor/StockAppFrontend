import React from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import styles from "../../componentStyles/FilterComponentStyle.module.css";
import {InputText} from "primereact/inputtext";

class FilterComponent extends React.Component {

    filterDivPerShare = (obj) => {
        const divPerShareMin = (this.props.filterInputs.divPerShareMin === "") ? 0 : this.props.filterInputs.divPerShareMin;
        const divPerShareMax = (this.props.filterInputs.divPerShareMax === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
            return (obj.financialsQuarterly.div_per_share + 1)
        })) : this.props.filterInputs.divPerShareMax

        return (this.props.filterInputs.divPerShareMin !== "" || this.props.filterInputs.divPerShareMax !== "") ? (obj.financialsQuarterly.div_per_share > divPerShareMin && obj.financialsQuarterly.div_per_share < divPerShareMax) : obj
    }

    filterPrice = (obj) => {
        const priceMin = (this.props.filterInputs.priceMin === "") ? 0 : this.props.filterInputs.priceMin;
        const priceMax = (this.props.filterInputs.priceMax === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
            return (obj.financialsDaily.price + 1)
        })) : this.props.filterInputs.priceMax;

        return (this.props.filterInputs.priceMin !== "" || this.props.filterInputs.priceMax !== "") ? (obj.financialsDaily.price > priceMin && obj.financialsDaily.price < priceMax) : obj
    }

    filterResult() {
        setTimeout(() => {
            this.setState({
                filteredList: this.props.tickerData.filter(this.filterPrice).filter(this.filterDivPerShare)
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

    resetFilterInputs = () => {
        this.props.resetFilterInputs && this.props.resetFilterInputs()
        this.filterResult()
    }

    render() {
        const closeDialog = (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={this.onClose}/>
            </div>
        );

        const resetFilters = (
            <div>
                <Button label="Reset" icon="pi pi-times" onClick={this.resetFilterInputs}/>
            </div>
        )

        const footer = (
            <div>
                <div style={{float: "right"}}>
                    {closeDialog}
                </div>
                <div style={{float: "left"}}>
                    {resetFilters}
                </div>
            </div>
        )

        if (!this.props.show) {
            return null;
        }

        const positiveInputRegex = /^\d*[.]?\d*$/

        return (
            <div>
                <Dialog header="Choose filters"
                        visible={this.props.show}
                        style={{width: '60%'}}
                        modal={true}
                        onHide={e => {
                            this.onClose(e)
                        }}
                        footer={footer}
                >

                    <div className={styles.col1}>
                        Price
                        <InputText id="priceMin"
                                   value={this.props.filterInputs.priceMin}
                                   name="priceMin"
                                   onChange={this.handleChange}
                                   style={{margin: "0 5px", width: "100px"}}
                                   keyfilter={positiveInputRegex}
                        />
                        -
                        <InputText id="priceMax"
                                   value={this.props.filterInputs.priceMax}
                                   name="priceMax"
                                   onChange={this.handleChange}
                                   style={{marginLeft: "5px", width: "100px"}}
                                   keyfilter={positiveInputRegex}
                        />
                    </div>
                    <div className={styles.col2}>
                        Dividend Per Share (FY)
                        <InputText id="divPerShareMin"
                                   value={this.props.filterInputs.divPerShareMin}
                                   name="divPerShareMin"
                                   onChange={this.handleChange}
                                   style={{margin: "0 5px", width: "100px"}}
                                   keyfilter={positiveInputRegex}
                        />
                        -
                        <InputText id="divPerShareMax"
                                   value={this.props.filterInputs.divPerShareMax}
                                   name="divPerShareMax"
                                   onChange={this.handleChange}
                                   style={{marginLeft: "5px", width: "100px"}}
                                   keyfilter={positiveInputRegex}
                        />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default FilterComponent