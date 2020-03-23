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
                    <Column field="ticker" header="Ticker" sortable={true}/>
                    <Column field="company" header="Company" sortable={true}/>
                    <Column field="last_price" header="Last price" sortable={true}/>
                    <Column field="chg_percentage" header="Chg percentage" sortable={true}/>
                    <Column field="chg" header="Chg" sortable={true}/>
                    <Column field="rating" header="Rating" sortable={true}/>
                    <Column field="volume" header="Volume" sortable={true}/>
                    <Column field="mkt_cap" header="Market cap" sortable={true}/>
                    <Column field="p_e" header="P/E" sortable={true}/>
                    <Column field="eps" header="Eps" sortable={true}/>
                    <Column field="employees" header="Employees" sortable={true}/>
                    <Column field="sector" header="Sector" sortable={true}/>
                </DataTable>
            </div>
        )
    }
}

export default TickerComponent