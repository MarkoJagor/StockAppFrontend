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
                    <Column field="ticker_valuation" header="Ticker"/>
                    <Column field="last" header="Last price"/>
                    <Column field="mkt_cap" header="Market cap"/>
                    <Column field="p_e" header="P/E"/>
                    <Column field="price_rev" header="Price/Rev"/>
                    <Column field="eps_ttm" header="EPS (TTM)"/>
                    <Column field="eps_diluted" header="EPS (Diluted)"/>
                    <Column field="ev_ebitda" header="EV/EBITDA"/>
                    <Column field="ev" header="Enterprise value"/>
                    <Column field="shares" header="Shares"/>
                </DataTable>
            </div>
        )
    }
}

export default ValuationComponent