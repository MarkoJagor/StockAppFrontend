import React from "react";
import axios from "axios";
import TabsComponent from "./TabsComponent";

class ScreenerDataComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickerData: []
        }
    }

    componentDidMount() {

        const multiplier = 100

        axios.get("http://localhost:8080/companies")
            .then(response => {
                this.setState({
                    tickerData: response.data.map((item) => {
                        const financialsDaily = {
                            ...item.financialsDaily,
                            "div_yield": (item.financialsDaily.div_yield === null) ? null : parseFloat((item.financialsDaily.div_yield * multiplier).toFixed(2)),
                            "chg": parseFloat((item.financialsDaily.chg * multiplier).toFixed(2)),
                            "weekly_perf": parseFloat((item.financialsDaily.weekly_perf * multiplier).toFixed(2)),
                            "monthly_perf": parseFloat((item.financialsDaily.monthly_perf * multiplier).toFixed(2)),
                            "three_month_perf": parseFloat((item.financialsDaily.three_month_perf * multiplier).toFixed(2)),
                            "six_month_perf": parseFloat((item.financialsDaily.six_month_perf * multiplier).toFixed(2)),
                            "ytd_perf": parseFloat((item.financialsDaily.ytd_perf * multiplier).toFixed(2)),
                            "yearly_perf": parseFloat((item.financialsDaily.yearly_perf * multiplier).toFixed(2)),
                            "volatility": parseFloat((item.financialsDaily.volatility * multiplier).toFixed(2))
                        };

                        const financialsQuarterly = {
                            ...item.financialsQuarterly,
                            "gross_mrq": parseFloat((item.financialsQuarterly.gross_mrq * multiplier).toFixed(2)),
                            "operating_mrq": parseFloat((item.financialsQuarterly.operating_mrq * multiplier).toFixed(2)),
                            "pretax_mrq": parseFloat((item.financialsQuarterly.pretax_mrq * multiplier).toFixed(2)),
                            "net_mrq": parseFloat((item.financialsQuarterly.net_mrq * multiplier).toFixed(2)),
                            "roa": parseFloat((item.financialsQuarterly.roa * multiplier).toFixed(2)),
                            "roe": parseFloat((item.financialsQuarterly.roe * multiplier).toFixed(2))
                        };

                        return {
                            ...item,
                            financialsDaily,
                            financialsQuarterly
                        }
                    })
                })
            })
    }

    render() {

        return (
            <TabsComponent tickerData={this.state.tickerData}/>
        )
    }
}

export default ScreenerDataComponent