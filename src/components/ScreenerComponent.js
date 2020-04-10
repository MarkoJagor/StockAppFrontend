import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import TickerComponent from "./TickerComponent";
import axios from "axios"
import OverviewTabComponent from "./OverviewTabComponent";
import PerformanceTabComponent from "./PerformanceTabComponent";
import KeyRatiosTabComponent from "./KeyRatiosTabComponent";
import FinancialsTabComponent from "./FinancialsTabComponent";
import DividendsTabComponent from "./DividendsTabComponent";

class ScreenerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchByTickerInput: "",
            activeIndex: 0,
            tickerData: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/company")
            .then(response => {
                this.setState({
                    tickerData: response.data
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