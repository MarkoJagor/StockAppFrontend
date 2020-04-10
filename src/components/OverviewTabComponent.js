import React from "react";
import Table from "./Table";

class OverviewTabComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicColumns: [
                {field: "name", header: "Name", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.price", header: "Price", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.chg", header: "Change %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsQuarterly.eps_ttm", header: "EPS (TTM)", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.p_e", header: "P/E", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.p_b", header: "P/B", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.mkt_cap", header: "Market Cap", sortable: true, excludeGlobalFilter: true},
                {field: "employees", header: "Employees", sortable: true, excludeGlobalFilter: true},
                {field: "sector", header: "Sector", sortable: true, excludeGlobalFilter: true},
                {field: "industry", header: "Industry", sortable: true, excludeGlobalFilter: true}
            ]
        }
    }

    render() {
        return (
            <Table dynamicColumns={this.state.dynamicColumns}
                   tickerData={this.props.tickerData}
                   searchByTickerInput={this.props.searchByTickerInput}
                   updateTickerSearch={this.props.updateTickerSearch}/>
        )
    }
}

export default OverviewTabComponent