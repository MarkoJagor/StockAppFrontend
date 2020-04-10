import React from "react";
import Table from "./Table";

class PerformanceTabComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dynamicColumns: [
                {field: "financialsDaily.chg", header: "Change %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.weekly_perf", header: "Weekly performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.monthly_perf", header: "Monthly performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.three_month_perf", header: "3 month performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.six_month_perf", header: "6 month performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.ytd_perf", header: "YTD performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.yearly_perf", header: "1 year performance %", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.one_year_beta", header: "1 year beta", sortable: true, excludeGlobalFilter: true},
                {field: "financialsDaily.volatility", header: "Volatility", sortable: true, excludeGlobalFilter: true}
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

export default PerformanceTabComponent