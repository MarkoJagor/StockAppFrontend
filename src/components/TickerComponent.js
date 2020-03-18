import React from "react";
import axios from "axios"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class TickerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            allTickers: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/tickers")
            .then(response => {
                this.setState({
                    allTickers: response.data
                })
            })
    }

    render() {
        return (
            <div>
                <DataTable value={this.state.allTickers} autoLayout={true}>
                    <Column field="ticker" header="Ticker"/>
                    <Column field="company" header="Company"/>
                    <Column field="last_price" header="Last price"/>
                    <Column field="chg_percentage" header="Chg percentage"/>
                    <Column field="chg" header="Chg"/>
                    <Column field="rating" header="Rating"/>
                    <Column field="volume" header="Volume"/>
                    <Column field="mkt_cap" header="Market cap"/>
                    <Column field="p_e" header="P/E"/>
                    <Column field="eps" header="Eps"/>
                    <Column field="employees" header="Employees"/>
                    <Column field="sector" header="Sector"/>
                </DataTable>
            </div>
        )
    }
}

export default TickerComponent