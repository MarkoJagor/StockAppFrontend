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
            tableData: [],
            filterInputs: {
                priceMin: "",
                priceMax: ""
            }
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            tableData: this.props.tickerData,
        }), 500)
    }

    updateTickerSearch = (value) => {
        this.setState(
            {searchByTickerInput: value}
        )
    }

    filterTableData = (value) => {
        this.setState({tableData: value})
    }

    handleFilterInputChange = (e) => {
        this.setState({
            filterInputs: {
                ...this.state.filterInputs,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {

        return (
            <TabView activeIndex={this.state.activeIndex} renderActiveOnly={false}
                     onTabChange={(e) => this.setState({activeIndex: e.index})}>
                <TabPanel header="Overview" leftIcon="pi pi-table">
                    <OverviewTabComponent tickerData={this.props.tickerData}
                                          tableData={this.state.tableData}
                                          filterInputs={this.state.filterInputs}
                                          searchByTickerInput={this.state.searchByTickerInput}
                                          updateTickerSearch={this.updateTickerSearch}
                                          filterTableData={this.filterTableData}
                                          handleFilterInputChange={this.handleFilterInputChange}/>
                </TabPanel>
                <TabPanel header="Performance" leftIcon="pi pi-table">
                    <PerformanceTabComponent tickerData={this.props.tickerData}
                                             tableData={this.state.tableData}
                                             filterInputs={this.state.filterInputs}
                                             searchByTickerInput={this.state.searchByTickerInput}
                                             updateTickerSearch={this.updateTickerSearch}
                                             filterTableData={this.filterTableData}
                                             handleFilterInputChange={this.handleFilterInputChange}/>
                </TabPanel>
                <TabPanel header="Key Ratios" leftIcon="pi pi-table">
                    <KeyRatiosTabComponent tickerData={this.props.tickerData}
                                           tableData={this.state.tableData}
                                           filterInputs={this.state.filterInputs}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}
                                           filterTableData={this.filterTableData}
                                           handleFilterInputChange={this.handleFilterInputChange}/>
                </TabPanel>
                <TabPanel header="Financials" leftIcon="pi pi-table">
                    <FinancialsTabComponent tickerData={this.props.tickerData}
                                            tableData={this.state.tableData}
                                            filterInputs={this.state.filterInputs}
                                            searchByTickerInput={this.state.searchByTickerInput}
                                            updateTickerSearch={this.updateTickerSearch}
                                            filterTableData={this.filterTableData}
                                            handleFilterInputChange={this.handleFilterInputChange}/>
                </TabPanel>
                <TabPanel header="Dividends" leftIcon="pi pi-table">
                    <DividendsTabComponent tickerData={this.props.tickerData}
                                           tableData={this.state.tableData}
                                           filterInputs={this.state.filterInputs}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}
                                           filterTableData={this.filterTableData}
                                           handleFilterInputChange={this.handleFilterInputChange}/>
                </TabPanel>
                <TabPanel header="Ticker" leftIcon="pi pi-table">
                    <TickerComponent/>
                </TabPanel>
            </TabView>
        )
    }
}

export default TabsComponent