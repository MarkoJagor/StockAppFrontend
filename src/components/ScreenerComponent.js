import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import TickerComponent from "./TickerComponent";
import axios from "axios"
import OverviewTabComponent from "./TableTabComponents/OverviewTabComponent";
import PerformanceTabComponent from "./TableTabComponents/PerformanceTabComponent";
import KeyRatiosTabComponent from "./TableTabComponents/KeyRatiosTabComponent";
import FinancialsTabComponent from "./TableTabComponents/FinancialsTabComponent";
import DividendsTabComponent from "./TableTabComponents/DividendsTabComponent";

class ScreenerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchByTickerInput: "",
            activeIndex: 0,
            tickerData: [],
        }
    }

    componentDidMount() {

        const multiplier = 100

        axios.get("http://localhost:8080/company")
            .then(response => {
                this.setState({
                    tickerData: response.data.map((item) => {
                        const financialsDaily = {
                            ...item.financialsDaily,
                            "div_yield": (item.financialsDaily.div_yield === null) ? null : (item.financialsDaily.div_yield * multiplier).toFixed(2),
                            "chg": (item.financialsDaily.chg * multiplier).toFixed(2),
                            "weekly_perf": (item.financialsDaily.weekly_perf * multiplier).toFixed(2),
                            "monthly_perf": (item.financialsDaily.monthly_perf * multiplier).toFixed(2),
                            "three_month_perf": (item.financialsDaily.three_month_perf * multiplier).toFixed(2),
                            "six_month_perf": (item.financialsDaily.six_month_perf * multiplier).toFixed(2),
                            "ytd_perf": (item.financialsDaily.ytd_perf * multiplier).toFixed(2),
                            "yearly_perf": (item.financialsDaily.yearly_perf * multiplier).toFixed(2),
                            "volatility": (item.financialsDaily.volatility * multiplier).toFixed(2)
                        };

                        const financialsQuarterly = {
                            ...item.financialsQuarterly,
                            "gross_mrq": (item.financialsQuarterly.gross_mrq * multiplier).toFixed(2),
                            "operating_mrq": (item.financialsQuarterly.operating_mrq * multiplier).toFixed(2),
                            "pretax_mrq": (item.financialsQuarterly.pretax_mrq * multiplier).toFixed(2),
                            "net_mrq": (item.financialsQuarterly.net_mrq * multiplier).toFixed(2),
                            "roa": (item.financialsQuarterly.roa * multiplier).toFixed(2),
                            "roe": (item.financialsQuarterly.roe * multiplier).toFixed(2)
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

    updateTickerSearch = (value) => {
        this.setState(
            {searchByTickerInput: value}
        )
    }


    render() {

        return (

            <TabView activeIndex={this.state.activeIndex} renderActiveOnly={false}
                     onTabChange={(e) => this.setState({activeIndex: e.index})}>
                <TabPanel header="Overview" leftIcon="pi pi-table">
                    <OverviewTabComponent tickerData={this.state.tickerData}
                                          searchByTickerInput={this.state.searchByTickerInput}
                                          updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Performance" leftIcon="pi pi-table">
                    <PerformanceTabComponent tickerData={this.state.tickerData}
                                             searchByTickerInput={this.state.searchByTickerInput}
                                             updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Key Ratios" leftIcon="pi pi-table">
                    <KeyRatiosTabComponent tickerData={this.state.tickerData}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Financials" leftIcon="pi pi-table">
                    <FinancialsTabComponent tickerData={this.state.tickerData}
                                            searchByTickerInput={this.state.searchByTickerInput}
                                            updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Dividends" leftIcon="pi pi-table">
                    <DividendsTabComponent tickerData={this.state.tickerData}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Ticker" leftIcon="pi pi-table">
                    <TickerComponent/>
                </TabPanel>
            </TabView>
        )
    }
}

export default ScreenerComponent