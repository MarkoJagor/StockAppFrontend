import React from "react";
import axios from "axios";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

class ValuationComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            allValuations: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/valuations")
            .then(response => {
                this.setState({
                    allValuations: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.allValuations} autoLayout={true}>
                    <Column field="ticker_valuation" header="Ticker" sortable={true}/>
                    <Column field="last" header="Last price" sortable={true}/>
                    <Column field="mkt_cap" header="Market cap" sortable={true}/>
                    <Column field="p_e" header="P/E" sortable={true}/>
                    <Column field="price_rev" header="Price/Rev" sortable={true}/>
                    <Column field="eps_ttm" header="EPS (TTM)" sortable={true}/>
                    <Column field="eps_diluted" header="EPS (Diluted)" sortable={true}/>
                    <Column field="ev_ebitda" header="EV/EBITDA" sortable={true}/>
                    <Column field="ev" header="Enterprise value" sortable={true}/>
                    <Column field="shares" header="Shares" sortable={true}/>
                </DataTable>
            </div>
        )
    }
}

export default ValuationComponent