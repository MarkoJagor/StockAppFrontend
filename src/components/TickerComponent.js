import React from "react";
import axios from "axios"
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {InputText} from "primereact/inputtext";
import {MultiSelect} from "primereact/multiselect";
import {Button} from "primereact/button";
import FilterComponent from "./FilterComponent";


class TickerComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            tickerData: [],
            tableData: [],
            dynamicColumns: [
                {field: "company", header: "Company", sortable: true, excludeGlobalFilter: true},
                {field: "last_price", header: "Last price", sortable: true, excludeGlobalFilter: true},
                {field: "chg_percentage", header: "Chg percentage", sortable: true, excludeGlobalFilter: true},
                {field: "chg", header: "Chg", sortable: true, excludeGlobalFilter: true},
                {field: "rating", header: "Rating", sortable: true, excludeGlobalFilter: true},
                {field: "volume", header: "Volume", sortable: true, excludeGlobalFilter: true},
                {field: "mkt_cap", header: "Market Cap", sortable: true, excludeGlobalFilter: true},
                {field: "p_e", header: "P/E", sortable: true, excludeGlobalFilter: true},
                {field: "eps", header: "EPS", sortable: true, excludeGlobalFilter: true},
                {field: "employees", header: "Employees", sortable: true, excludeGlobalFilter: true},
                {field: "sector", header: "Sector", sortable: true, excludeGlobalFilter: true},
            ],
            selectedColumns: [],
            show: false
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/tickers")
            .then(response => {
                this.setState({
                    tickerData: response.data,
                    tableData: response.data,
                    selectedColumns: this.state.dynamicColumns
                })
            })
    }

    filterTableData = (value) => {
        var filteredTickers = value;
        this.setState({tableData: filteredTickers})
    }

    onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.state.dynamicColumns.filter(col => selectedColumns.includes(col));
        this.setState({selectedColumns: orderedSelectedColumns});
    };

    handleClick = (row) => {
        return <div>
            <a href={"ticker/" + row.id}>{row.ticker}</a>
        </div>
    };

    showModal = () => {
        this.setState({
                show: !this.state.show
            }
        )
    };

    render() {

        const searchByTicker = (
            <div style={{textAlign: 'left'}}>
                <i className="pi pi-search" style={{margin: '4px 10px 0 0'}}/>
                <InputText type="search"
                           onInput={(e) => this.setState({globalFilter: e.target.value})}
                           placeholder="Search by Ticker"
                           size="20"/>
            </div>
        );

        const toggleColumns = (
            <MultiSelect value={this.state.selectedColumns}
                         options={this.state.dynamicColumns}
                         optionLabel="header"
                         placeholder="Select columns to display"
                         filter={true}
                         filterPlaceholder="Search"
                         onChange={this.onColumnToggle}/>
        );

        const filter = (
            <div>
                <Button label="Filters" icon="pi pi-filter" onClick={this.showModal}/>
                <FilterComponent filterTableData={this.filterTableData} onClose={this.showModal}
                                 show={this.state.show} tickerData={this.state.tickerData}/>
            </div>
        );

        const header = (
            <div>
                <div style={{float: "right"}}>
                    {filter}
                </div>
                <div className="p-inputgroup">
                    {searchByTicker}
                    {toggleColumns}
                </div>
            </div>
        );

        const dynamicColumns = this.state.selectedColumns.map((column) => {
            return <Column key={column.field}
                           field={column.field}
                           header={column.header}
                           sortable={column.sortable}
                           body={column.body}
                           excludeGlobalFilter={column.excludeGlobalFilter}
                           disabled={column.disabled}/>
        });

        return (

            <div>
                <DataTable value={this.state.tableData} autoLayout={true} header={header}
                           globalFilter={this.state.globalFilter} emptyMessage="No records found">
                    <Column field="ticker" header="Ticker" sortable={true} body={this.handleClick}/>
                    {dynamicColumns}
                </DataTable>
            </div>
        )
    }
}

export default TickerComponent