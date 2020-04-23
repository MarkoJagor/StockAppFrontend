import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import OverviewTabComponent from "./OverviewTabComponent";
import PerformanceTabComponent from "./PerformanceTabComponent";
import KeyRatiosTabComponent from "./KeyRatiosTabComponent";
import FinancialsTabComponent from "./FinancialsTabComponent";
import DividendsTabComponent from "./DividendsTabComponent";

class TabsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            searchByTickerInput: "",
            activeIndex: 0,
            tableData: [],
            filterInputs: {
                oneYearBetaMin: "",
                oneYearBetaMax: "",
                threeMonthPerfMin: "",
                threeMonthPerfMax: "",
                sixMonthPerfMin: "",
                sixMonthPerfMax: "",
                annualRevenueRange: [0, 2000],
                assetsRange: [0, 5000],
                currentAssetsRange: [0, 1000],
                debtRange: [0, 1000],
                divPaidRange: [-100, 0],
                chgMin: "",
                chgMax: "",
                currentRatioMin: "",
                currentRatioMax: "",
                debtToEquityMin: "",
                debtToEquityMax: "",
                divPerShareMin: "",
                divPerShareMax: "",
                divYieldMin: "",
                divYieldMax: "",
                ebitdaRange: [0, 1000],
                epsFyMin: "",
                epsFyMax: "",
                epsTtmMin: "",
                epsTtmMax: "",
                epsDilutedFyMin: "",
                epsDilutedFyMax: "",
                epsDilutedTtmMin: "",
                epsDilutedTtmMax: "",
                evRange: [-2000, 2000],
                evEbitdaMin: "",
                evEbitdaMax: "",
                grossMrqMin: "",
                grossMrqMax: "",
                grossProfitFyRange: [-200, 200],
                grossProfitMrqRange: [-200, 200],
                incomeRange: [-100, 100],
                mktCapRange: [0, 2000],
                netDebtRange: [-2000, 2000],
                monthlyPerfMin: "",
                monthlyPerfMax: "",
                netMrqMin: "",
                netMrqMax: "",
                operatingMrqMin: "",
                operatingMrqMax: "",
                priceMin: "",
                priceMax: "",
                p_eMin: "",
                p_eMax: "",
                p_bMin: "",
                p_bMax: "",
                pretaxMrqMin: "",
                pretaxMrqMax: "",
                priceToRevMin: "",
                priceToRevMax: "",
                quickRatioMin: "",
                quickRatioMax: "",
                revenueRange: [0, 2000],
                roaMin: "",
                roaMax: "",
                roeMin: "",
                roeMax: "",
                sharesRange: [0, 1000],
                volatilityMin: "",
                volatilityMax: "",
                weeklyPerfMin: "",
                weeklyPerfMax: "",
                yearlyPerfMin: "",
                yearlyPerfMax: "",
                ytdPerfMin: "",
                ytdPerfMax: ""
            },
            filterInputsClone: {}
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            tableData: this.props.tickerData,
            filterInputsClone: this.state.filterInputs
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

    handleRangeSliderChange = (sliderName, value) => {
        this.setState({
            filterInputs: {
                ...this.state.filterInputs,
                [sliderName]: value,
            }
        })
    }

    resetFilterInputs = () => {
        this.setState({
            filterInputs: this.state.filterInputsClone
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
                                          handleFilterInputChange={this.handleFilterInputChange}
                                          handleRangeSliderChange={this.handleRangeSliderChange}
                                          resetFilterInputs={this.resetFilterInputs}/>
                </TabPanel>
                <TabPanel header="Performance" leftIcon="pi pi-table">
                    <PerformanceTabComponent tickerData={this.props.tickerData}
                                             tableData={this.state.tableData}
                                             filterInputs={this.state.filterInputs}
                                             searchByTickerInput={this.state.searchByTickerInput}
                                             updateTickerSearch={this.updateTickerSearch}
                                             filterTableData={this.filterTableData}
                                             handleFilterInputChange={this.handleFilterInputChange}
                                             handleRangeSliderChange={this.handleRangeSliderChange}
                                             resetFilterInputs={this.resetFilterInputs}/>
                </TabPanel>
                <TabPanel header="Key Ratios" leftIcon="pi pi-table">
                    <KeyRatiosTabComponent tickerData={this.props.tickerData}
                                           tableData={this.state.tableData}
                                           filterInputs={this.state.filterInputs}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}
                                           filterTableData={this.filterTableData}
                                           handleFilterInputChange={this.handleFilterInputChange}
                                           handleRangeSliderChange={this.handleRangeSliderChange}
                                           resetFilterInputs={this.resetFilterInputs}/>
                </TabPanel>
                <TabPanel header="Financials" leftIcon="pi pi-table">
                    <FinancialsTabComponent tickerData={this.props.tickerData}
                                            tableData={this.state.tableData}
                                            filterInputs={this.state.filterInputs}
                                            searchByTickerInput={this.state.searchByTickerInput}
                                            updateTickerSearch={this.updateTickerSearch}
                                            filterTableData={this.filterTableData}
                                            handleFilterInputChange={this.handleFilterInputChange}
                                            handleRangeSliderChange={this.handleRangeSliderChange}
                                            resetFilterInputs={this.resetFilterInputs}/>
                </TabPanel>
                <TabPanel header="Dividends" leftIcon="pi pi-table">
                    <DividendsTabComponent tickerData={this.props.tickerData}
                                           tableData={this.state.tableData}
                                           filterInputs={this.state.filterInputs}
                                           searchByTickerInput={this.state.searchByTickerInput}
                                           updateTickerSearch={this.updateTickerSearch}
                                           filterTableData={this.filterTableData}
                                           handleFilterInputChange={this.handleFilterInputChange}
                                           handleRangeSliderChange={this.handleRangeSliderChange}
                                           resetFilterInputs={this.resetFilterInputs}/>
                </TabPanel>
            </TabView>
        )
    }
}

export default TabsComponent