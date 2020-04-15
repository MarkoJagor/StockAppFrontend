import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import OverviewTabComponent from "./OverviewTabComponent";
import PerformanceTabComponent from "./PerformanceTabComponent";
import KeyRatiosTabComponent from "./KeyRatiosTabComponent";
import FinancialsTabComponent from "./FinancialsTabComponent";
import DividendsTabComponent from "./DividendsTabComponent";
import TickerComponent from "../TickerComponent";

class TabsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            searchByTickerInput: "",
            activeIndex: 0,
        }
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
                    <OverviewTabComponent tickerData={this.props.tickerData}
                                          searchByTickerInput={this.state.searchByTickerInput}
                                          updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Performance" leftIcon="pi pi-table">
                    <PerformanceTabComponent tickerData={this.props.tickerData}
                                             searchByTickerInput={this.state.searchByTickerInput}
                                             updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Key Ratios" leftIcon="pi pi-table">
                    <KeyRatiosTabComponent tickerData={this.props.tickerData}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Financials" leftIcon="pi pi-table">
                    <FinancialsTabComponent tickerData={this.props.tickerData}
                                            searchByTickerInput={this.state.searchByTickerInput}
                                            updateTickerSearch={this.updateTickerSearch}/>
                </TabPanel>
                <TabPanel header="Dividends" leftIcon="pi pi-table">
                    <DividendsTabComponent tickerData={this.props.tickerData}
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

export default TabsComponent