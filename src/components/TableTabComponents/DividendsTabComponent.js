import React from "react";
import Table from "./Table";

class DividendsTabComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            dynamicColumns: [
                {field: "financialsDaily.div_yield", header: "Dividend Yield %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.div_paid", header: "Dividends Paid", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.div_per_share", header: "Dividend Per Share (FY)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.shares", header: "Shares", sortable: true, excludeGlobalFilter: true}
            ]
        }
    }

    render() {
        return (
            <Table dynamicColumns={this.state.dynamicColumns}
                   tickerData={this.props.tickerData}
                   tableData={this.props.tableData}
                   filterInputs={this.props.filterInputs}
                   searchByTickerInput={this.props.searchByTickerInput}
                   updateTickerSearch={this.props.updateTickerSearch}
                   filterTableData={this.props.filterTableData}
                   handleFilterInputChange={this.props.handleFilterInputChange}
                   handleRangeSliderChange={this.props.handleRangeSliderChange}
                   resetFilterInputs={this.props.resetFilterInputs}/>
        )
    }
}

export default DividendsTabComponent