import React from "react";
import Table from "./Table";

class FinancialsTabComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicColumns: [
                {field: "financialsDaily.mkt_cap", header: "Market Cap", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.ev", header: "Enterprise Value", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.assets", header: "Assets", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.current_assets", header: "Current Assets", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.debt", header: "Debt", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.net_debt", header: "Net Debt", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.ebitda", header: "EBITDA", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.gross_profit_mrq", header: "Gross Profit (MRQ)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.gross_profit_fy", header: "Gross Profit (FY)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.revenue", header: "Revenue", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.annual_revenue", header: "Annual Revenue", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.income", header: "Income", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.div_paid", header: "Dividends Paid", sortable: true, excludeGlobalFilter: true},
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

export default FinancialsTabComponent