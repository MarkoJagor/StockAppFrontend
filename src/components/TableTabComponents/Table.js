import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {MultiSelect} from "primereact/multiselect";
import {setCellBody} from "./TableHelper";
import {Button} from "primereact/button";
import NewFilterComponent from "./NewFilterComponent";

class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedColumns: [],
            loading: true,
            show: false,
        }
    }

    componentDidMount() {

        this.setState({
            selectedColumns: this.props.dynamicColumns,
        })

        setTimeout(() => this.setState({
            loading: false
        }), 500)

    }

    onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = this.props.dynamicColumns.filter(col => selectedColumns.includes(col));
        this.setState({selectedColumns: orderedSelectedColumns});
    };

    openCompanyInfoPage = (row) => {
        return <div>
            <a href={"screener/" + row.ticker_id} target="_blank" rel="noopener noreferrer">{row.ticker_id}</a>
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
                           onChange={(e) => {
                               this.props.updateTickerSearch(e.target.value)
                           }}
                           value={this.props.searchByTickerInput}
                           placeholder="Search by Ticker"
                           size="20"/>
            </div>
        );

        const toggleColumns = (
            <MultiSelect value={this.state.selectedColumns}
                         options={this.props.dynamicColumns}
                         optionLabel="header"
                         placeholder="Select columns to display"
                         filter={true}
                         filterPlaceholder="Search"
                         onChange={this.onColumnToggle}/>
        );

        const filter = (
            <div>
                <Button label="Filters" icon="pi pi-filter" onClick={this.showModal}/>
                <NewFilterComponent show={this.state.show}
                                    onClose={this.showModal}
                                    tickerData={this.props.tickerData}
                                    filterInputs={this.props.filterInputs}
                                    filterTableData={this.props.filterTableData}
                                    handleFilterInputChange={this.props.handleFilterInputChange}
                                    resetFilterInputs={this.props.resetFilterInputs}/>
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

        const dynamicColumns = this.state.selectedColumns.map((column, i) => {
            return <Column
                key={column.field}
                field={column.field}
                header={column.header}
                sortable={column.sortable}
                excludeGlobalFilter={column.excludeGlobalFilter}
                body={setCellBody}/>;
        });

        return (
            <DataTable value={this.props.tableData} autoLayout={true} header={header}
                       globalFilter={this.props.searchByTickerInput} emptyMessage="No records found"
                       loading={this.state.loading}>
                <Column field="ticker_id" header="Ticker" sortable={true} body={this.openCompanyInfoPage}/>
                {dynamicColumns}
            </DataTable>
        )
    }
}

export default Table