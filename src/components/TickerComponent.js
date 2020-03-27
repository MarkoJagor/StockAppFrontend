import React from "react";
import axios from "axios"
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputText} from 'primereact/inputtext';

class TickerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            allTickers: []
        };
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

        const handleClick = (rowData) => {
            return <div>
                <a href={"ticker/" + rowData.id}>{rowData.ticker}</a>
            </div>;
        };

        const tickerFilter = (
            <div style={{'textAlign': 'left'}}>
                <i className="pi pi-search" style={{margin: '4px 10px 0 0'}}></i>
                <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})}
                           placeholder="Search by Ticker" size="20"/>
            </div>
        );

        return (
            <div>
                <DataTable value={this.state.allTickers} autoLayout={true} header={tickerFilter}
                           globalFilter={this.state.globalFilter} emptyMessage="No records found">
                    <Column field="ticker" header="Ticker" sortable={true} body={handleClick}/>
                    <Column field="company" header="Company" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="last_price" header="Last price" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="chg_percentage" header="Chg percentage" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="chg" header="Chg" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="rating" header="Rating" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="volume" header="Volume" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="mkt_cap" header="Market cap" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="p_e" header="P/E" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="eps" header="Eps" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="employees" header="Employees" sortable={true}
                            excludeGlobalFilter={true}/>
                    <Column field="sector" header="Sector" sortable={true}
                            excludeGlobalFilter={true}/>
                </DataTable>
            </div>
        )
    }
}

export default TickerComponent