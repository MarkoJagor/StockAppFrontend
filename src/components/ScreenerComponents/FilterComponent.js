import React from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import filterColumnStyle from "../../componentStyles/FilterComponentStyle.module.css";
import filterInputStyle from "../../componentStyles/FilterComponentStyle.css";
import inputRegex from "../../regex/InputRegex"
import {InputText} from "primereact/inputtext";
import {Slider} from "primereact/slider";

class FilterComponent extends React.Component {

    positiveValuesFilter = (obj, minValue, maxValue, objectValue) => {
        const min = (minValue === "") ? 0 : minValue;
        const max = (maxValue === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
            return (objectValue + 1)
        })) : maxValue;

        return (minValue !== "" || maxValue !== "") ? (objectValue > min && objectValue < max) : obj
    }

    positiveAndNegativeValuesFilter = (obj, minValue, maxValue, objectValue) => {
        const min = (minValue === "") ? Math.min.apply(Math, this.props.tickerData.map(obj => {
            return (objectValue - 1)
        })) : minValue;
        const max = (maxValue === "") ? Math.max.apply(Math, this.props.tickerData.map(obj => {
            return (objectValue + 1)
        })) : maxValue;

        return (minValue !== "" || maxValue !== "") ? (objectValue !== null && objectValue > min && objectValue < max) : obj
    }

    sliderValuesFilter = (obj, rangeArray, minValue, maxValue, objectValue) => {
        const multiplier = 1000
        const min = (rangeArray[0] === minValue) ? minValue * multiplier : rangeArray[0] * multiplier;
        const max = (rangeArray[1] === maxValue) ? maxValue * multiplier : rangeArray[1] * multiplier;

        return (minValue !== rangeArray[0] || maxValue !== rangeArray[1]) ? (objectValue !== null && objectValue > min && objectValue < max) : obj
    }

    oneYearBetaFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.oneYearBetaMin, this.props.filterInputs.oneYearBetaMax, obj.financialsDaily.one_year_beta)
    }

    threeMonthsPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.threeMonthPerfMin, this.props.filterInputs.threeMonthPerfMax, obj.financialsDaily.three_month_perf)
    }

    sixMonthsPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.sixMonthPerfMin, this.props.filterInputs.sixMonthPerfMax, obj.financialsDaily.six_month_perf)
    }

    annualRevenueFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.annualRevenueRange, 0, 2000, obj.financialsQuarterly.annual_revenue)
    }

    assetsFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.assetsRange, 0, 5000, obj.financialsQuarterly.assets)
    }

    chgFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.chgMin, this.props.filterInputs.chgMax, obj.financialsDaily.chg)
    }

    currentAssetsFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.currentAssetsRange, 0, 1000, obj.financialsQuarterly.current_assets)
    }

    currentRatioFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.currentRatioMin, this.props.filterInputs.currentRatioMax, obj.financialsQuarterly.current_ratio)
    }

    debtFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.debtRange, 0, 1000, obj.financialsQuarterly.debt)
    }

    debtToEquityFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.debtToEquityMin, this.props.filterInputs.debtToEquityMax, obj.financialsQuarterly.debt_to_equity)
    }

    divPaidFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.divPaidRange, -100, 0, obj.financialsQuarterly.div_paid)
    }

    divPerShareFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.divPerShareMin, this.props.filterInputs.divPerShareMax, obj.financialsQuarterly.div_per_share)
    }

    divYieldFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.divYieldMin, this.props.filterInputs.divYieldMax, obj.financialsDaily.div_yield)
    }

    ebitdaFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.ebitdaRange, 0, 1000, obj.financialsQuarterly.ebitda)
    }

    epsFyFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.epsFyMin, this.props.filterInputs.epsFyMax, obj.financialsQuarterly.eps_fy)
    }

    epsTtmFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.epsTtmMin, this.props.filterInputs.epsTtmMax, obj.financialsQuarterly.eps_ttm)
    }

    epsDilutedFyFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.epsDilutedFyMin, this.props.filterInputs.epsDilutedFyMax, obj.financialsQuarterly.eps_diluted_fy)
    }

    epsDilutedTtmFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.epsDilutedTtmMin, this.props.filterInputs.epsDilutedTtmMax, obj.financialsQuarterly.eps_diluted_ttm)
    }

    evFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.evRange, -2000, 2000, obj.financialsDaily.ev)
    }

    evEbitdaFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.evEbitdaMin, this.props.filterInputs.evEbitdaMax, obj.financialsDaily.ev_ebitda)
    }

    grossMrqFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.grossMrqMin, this.props.filterInputs.grossMrqMax, obj.financialsQuarterly.gross_mrq)
    }

    grossProfitFyFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.grossProfitFyRange, -200, 200, obj.financialsQuarterly.gross_profit_fy)
    }

    grossProfitMrqFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.grossProfitMrqRange, -200, 200, obj.financialsQuarterly.gross_profit_mrq)
    }

    incomeFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.incomeRange, -100, 100, obj.financialsQuarterly.income)
    }

    mktCapFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.mktCapRange, 0, 2000, obj.financialsDaily.mkt_cap)
    }

    monthlyPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.monthlyPerfMin, this.props.filterInputs.monthlyPerfMax, obj.financialsDaily.monthly_perf)
    }

    netDebtFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.netDebtRange, -2000, 2000, obj.financialsQuarterly.net_debt)
    }

    netMrqFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.netMrqMin, this.props.filterInputs.netMrqMax, obj.financialsQuarterly.net_mrq)
    }

    operatingMrqFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.operatingMrqMin, this.props.filterInputs.operatingMrqMax, obj.financialsQuarterly.operating_mrq)
    }

    pEFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.p_eMin, this.props.filterInputs.p_eMax, obj.financialsDaily.p_e)
    }

    pBFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.p_bMin, this.props.filterInputs.p_bMax, obj.financialsDaily.p_b)
    }

    pretaxMrqFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.pretaxMrqMin, this.props.filterInputs.pretaxMrqMax, obj.financialsQuarterly.pretax_mrq)
    }

    priceFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.priceMin, this.props.filterInputs.priceMax, obj.financialsDaily.price)
    }

    priceToRevFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.priceToRevMin, this.props.filterInputs.priceToRevMax, obj.financialsDaily.price_rev)
    }

    quickRatioFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.quickRatioMin, this.props.filterInputs.quickRatioMax, obj.financialsQuarterly.quick_ratio)
    }

    revenueFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.revenueRange, 0, 2000, obj.financialsQuarterly.revenue)
    }

    roaFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.roaMin, this.props.filterInputs.roaMax, obj.financialsQuarterly.roa)
    }

    roeFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.roeMin, this.props.filterInputs.roeMax, obj.financialsQuarterly.roe)
    }

    sharesFilter = (obj) => {
        return this.sliderValuesFilter(obj, this.props.filterInputs.sharesRange, 0, 1000, obj.financialsQuarterly.shares)
    }

    volatilityFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.volatilityMin, this.props.filterInputs.volatilityMax, obj.financialsDaily.volatility)
    }

    weeklyPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.weeklyPerfMin, this.props.filterInputs.weeklyPerfMax, obj.financialsDaily.weekly_perf)
    }

    yearlyPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.yearlyPerfMin, this.props.filterInputs.yearlyPerfMax, obj.financialsDaily.yearly_perf)
    }

    ytdPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.ytdPerfMin, this.props.filterInputs.ytdPerfMax, obj.financialsDaily.ytd_perf)
    }


    filterResult() {

        const filters = [this.oneYearBetaFilter, this.threeMonthsPerfFilter, this.annualRevenueFilter, this.assetsFilter, this.currentAssetsFilter,
            this.debtFilter, this.divPaidFilter, this.sixMonthsPerfFilter, this.chgFilter, this.currentRatioFilter, this.debtToEquityFilter,
            this.divPerShareFilter, this.divYieldFilter, this.ebitdaFilter, this.epsFyFilter, this.epsTtmFilter, this.epsDilutedFyFilter,
            this.epsDilutedTtmFilter, this.evFilter, this.evEbitdaFilter, this.grossMrqFilter, this.grossProfitFyFilter, this.grossProfitMrqFilter,
            this.incomeFilter, this.mktCapFilter, this.netDebtFilter, this.monthlyPerfFilter, this.netMrqFilter, this.operatingMrqFilter,
            this.pEFilter, this.pBFilter, this.pretaxMrqFilter, this.priceFilter, this.priceToRevFilter, this.quickRatioFilter, this.revenueFilter,
            this.roaFilter, this.roeFilter, this.sharesFilter, this.volatilityFilter, this.weeklyPerfFilter, this.yearlyPerfFilter,
            this.ytdPerfFilter]


        setTimeout(() => {
            this.setState({
                filteredList: this.props.tickerData.filter(v => filters.every(f => f(v)))
            })
            this.props.filterTableData(this.state.filteredList)
        }, 1000)


        setTimeout(() => {
            console.log(this.state.filteredList);
        }, 1500)
    }

    onClose = () => {
        this.props.onClose && this.props.onClose()
    };

    handleInputChange = e => {
        this.props.handleFilterInputChange && this.props.handleFilterInputChange(e)
        this.filterResult()
    };

    handleSliderChange = (name, value) => {
        this.props.handleRangeSliderChange && this.props.handleRangeSliderChange(name, value)
        this.filterResult()
    };

    resetFilterInputs = () => {
        this.props.resetFilterInputs && this.props.resetFilterInputs()
        this.filterResult()
    }

    render() {
        const closeDialog = (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={this.onClose}/>
            </div>
        );

        const resetFilters = (
            <div>
                <Button label="Reset" icon="pi pi-times" onClick={this.resetFilterInputs}/>
            </div>
        )

        const footer = (
            <div>
                <div style={{float: "right"}}>
                    {closeDialog}
                </div>
                <div style={{float: "left"}}>
                    {resetFilters}
                </div>
            </div>
        )

        if (!this.props.show) {
            return null;
        }

        const InputFilter = (header, minValueObject, minValueString, maxValueObject, maxValueString, regex, headerStyle) => (
            <div>
                <p style={headerStyle}>
                    {header}
                </p>
                <p>
                    <InputText id={minValueString}
                               value={minValueObject}
                               name={minValueString}
                               onChange={this.handleInputChange}
                               style={filterInputStyle.leftTextBox}
                               keyfilter={regex}
                    />
                    -
                    <InputText id={maxValueString}
                               value={maxValueObject}
                               name={maxValueString}
                               onChange={this.handleInputChange}
                               style={filterInputStyle.rightTextBox}
                               keyfilter={regex}
                    />
                </p>
            </div>
        )

        const RangeSliderFilter = (header, rangeArray, rangeArrayString, step, min, max, style) => (
            <div>
                <p>
                    {header}: {rangeArray[0]}M - {rangeArray[1]}M
                    <br/>
                </p>
                <Slider id={rangeArrayString}
                        value={rangeArray}
                        onChange={(e) => {
                            this.handleSliderChange(rangeArrayString, e.value)
                        }}
                        step={step}
                        range={true}
                        min={min}
                        max={max}
                        style={style}/>
                <br/>
            </div>
        )

        return (
            <div>
                <Dialog header="Choose filters"
                        visible={this.props.show}
                        style={{width: '80%'}}
                        modal={true}
                        onHide={this.onClose}
                        footer={footer}
                >

                    <div className={filterColumnStyle.col1}>
                        <div>
                            {InputFilter("1-Year Beta", this.props.filterInputs.oneYearBetaMin, "oneYearBetaMin",
                                this.props.filterInputs.oneYearBetaMax, "oneYearBetaMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("6-Month Performance", this.props.filterInputs.sixMonthPerfMin, "sixMonthPerfMin",
                                this.props.filterInputs.sixMonthPerfMax, "sixMonthPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>{RangeSliderFilter("Assets", this.props.filterInputs.assetsRange, "assetsRange",
                            25, 0, 5000, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Current Assets", this.props.filterInputs.currentAssetsRange, "currentAssetsRange",
                                25, 0, 1000, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Debt", this.props.filterInputs.debtRange, "debtRange",
                                25, 0, 1000, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Dividends Paid", this.props.filterInputs.divPaidRange, "divPaidRange",
                                5, -100, 0, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Div Yield %", this.props.filterInputs.divYieldMin, "divYieldMin",
                                this.props.filterInputs.divYieldMax, "divYieldMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("EPS (TTM)", this.props.filterInputs.epsTtmMin, "epsTtmMin",
                                this.props.filterInputs.epsTtmMax, "epsTtmMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("EPS Diluted (TTM)", this.props.filterInputs.epsDilutedTtmMin, "epsDilutedTtmMin",
                                this.props.filterInputs.epsDilutedTtmMax, "epsDilutedTtmMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("EV/EBITDA", this.props.filterInputs.evEbitdaMin, "evEbitdaMin",
                                this.props.filterInputs.evEbitdaMax, "evEbitdaMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>{RangeSliderFilter("Gross Profit (FY)", this.props.filterInputs.grossProfitFyRange, "grossProfitFyRange",
                            25, -200, 200, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Income", this.props.filterInputs.incomeRange, "incomeRange",
                                5, -100, 100, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Market Cap", this.props.filterInputs.mktCapRange, "mktCapRange",
                                50, 0, 2000, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {RangeSliderFilter("Net Debt", this.props.filterInputs.netDebtRange, "netDebtRange",
                                50, -2000, 2000, filterInputStyle.leftColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Operating Margin %", this.props.filterInputs.operatingMrqMin, "operatingMrqMin",
                                this.props.filterInputs.operatingMrqMax, "operatingMrqMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("P/B Ratio", this.props.filterInputs.p_bMin, "p_bMin",
                                this.props.filterInputs.p_bMax, "p_bMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Price", this.props.filterInputs.priceMin, "priceMin",
                                this.props.filterInputs.priceMax, "priceMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Quick Ratio", this.props.filterInputs.quickRatioMin, "quickRatioMin",
                                this.props.filterInputs.quickRatioMax, "quickRatioMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Return on Assets (TTM)", this.props.filterInputs.roaMin, "roaMin",
                                this.props.filterInputs.roaMax, "roaMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Volatility", this.props.filterInputs.volatilityMin, "volatilityMin",
                                this.props.filterInputs.volatilityMax, "volatilityMax", inputRegex.positiveInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Yearly Performance", this.props.filterInputs.yearlyPerfMin, "yearlyPerfMin",
                                this.props.filterInputs.yearlyPerfMax, "yearlyPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.leftColumnTextBoxHeader)}
                        </div>
                    </div>

                    <div className={filterColumnStyle.col2}>
                        <div>
                            {InputFilter("3-Month Performance", this.props.filterInputs.threeMonthPerfMin, "threeMonthPerfMin",
                                this.props.filterInputs.threeMonthPerfMax, "threeMonthPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("Annual Revenue", this.props.filterInputs.annualRevenueRange, "annualRevenueRange",
                                25, 0, 2000, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Change %", this.props.filterInputs.chgMin, "chgMin",
                                this.props.filterInputs.chgMax, "chgMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Current Ratio", this.props.filterInputs.currentRatioMin, "currentRatioMin",
                                this.props.filterInputs.currentRatioMax, "currentRatioMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Debt to Equity Ratio", this.props.filterInputs.debtToEquityMin, "debtToEquityMin",
                                this.props.filterInputs.debtToEquityMax, "debtToEquityMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Dividend Per Share (FY)", this.props.filterInputs.divPerShareMin, "divPerShareMin",
                                this.props.filterInputs.divPerShareMax, "divPerShareMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("EBITDA", this.props.filterInputs.ebitdaRange, "ebitdaRange",
                                25, 0, 1000, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("EPS (FY)", this.props.filterInputs.epsFyMin, "epsFyMin",
                                this.props.filterInputs.epsFyMax, "epsFyMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("EPS Diluted (FY)", this.props.filterInputs.epsDilutedFyMin, "epsDilutedFyMin",
                                this.props.filterInputs.epsDilutedFyMax, "epsDilutedFyMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("Enterprise Value", this.props.filterInputs.evRange, "evRange",
                                50, -2000, 2000, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Gross Margin %", this.props.filterInputs.grossMrqMin, "grossMrqMin",
                                this.props.filterInputs.grossMrqMax, "grossMrqMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("Gross Profit (MRQ)", this.props.filterInputs.grossProfitMrqRange, "grossProfitMrqRange",
                                25, -200, 200, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Monthly Performance", this.props.filterInputs.monthlyPerfMin, "monthlyPerfMin",
                                this.props.filterInputs.monthlyPerfMax, "monthlyPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Net Margin %", this.props.filterInputs.netMrqMin, "netMrqMin",
                                this.props.filterInputs.netMrqMax, "netMrqMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("P/E Ratio", this.props.filterInputs.p_eMin, "p_eMin",
                                this.props.filterInputs.p_eMax, "p_eMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Pretax Margin %", this.props.filterInputs.pretaxMrqMin, "pretaxMrqMin",
                                this.props.filterInputs.pretaxMrqMax, "pretaxMrqMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("Price to Revenue Ratio", this.props.filterInputs.priceToRevMin, "priceToRevMin",
                                this.props.filterInputs.priceToRevMax, "priceToRevMax", inputRegex.positiveInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("Revenue", this.props.filterInputs.revenueRange, "revenueRange",
                                50, 0, 2000, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Return on Equity (TTM)", this.props.filterInputs.roeMin, "roeMin",
                                this.props.filterInputs.roeMax, "roeMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {RangeSliderFilter("Number of Shares", this.props.filterInputs.sharesRange, "sharesRange",
                                50, 0, 1000, filterInputStyle.rightColumnSlider)}
                        </div>
                        <div>
                            {InputFilter("Weekly Performance", this.props.filterInputs.weeklyPerfMin, "weeklyPerfMin",
                                this.props.filterInputs.weeklyPerfMax, "weeklyPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                        <div>
                            {InputFilter("YTD Performance", this.props.filterInputs.ytdPerfMin, "ytdPerfMin",
                                this.props.filterInputs.ytdPerfMax, "ytdPerfMax", inputRegex.positiveAndNegativeInputRegex, filterInputStyle.rightColumnTextBoxHeader)}
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default FilterComponent