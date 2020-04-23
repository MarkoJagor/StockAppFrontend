import React from "react";
import Table from "./Table";

class KeyRatiosTabComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dynamicColumns: [
                {field: "financialsDaily.p_e", header: "P/E", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.p_b", header: "P/B", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_fy", header: "EPS (FY)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_ttm", header: "EPS (TTM)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_diluted_fy", header: "EPS Diluted (FY)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_diluted_ttm", header: "EPS Diluted (TTM)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.current_ratio", header: "Current Ratio", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.debt_to_equity", header: "Debt/Equity", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.quick_ratio", header: "Quick Ratio", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.roa", header: "ROA %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.roe", header: "ROE %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.price_rev", header: "Price/Revenue", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.ev_ebitda", header: "EV/EBITDA", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.gross_mrq", header: "Gross Margin %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.operating_mrq", header: "Operating Margin %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.pretax_mrq", header: "Pretax Margin %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.net_mrq", header: "Net Margin %", sortable: true, excludeGlobalFilter: true}
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

export default KeyRatiosTabComponent