import React from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import styles from "../../componentStyles/FilterComponentStyle.module.css";
import {InputText} from "primereact/inputtext";

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

        return (minValue !== "" || maxValue !== "") ? (objectValue > min && objectValue < max) : obj
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

    chgFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.chgMin, this.props.filterInputs.chgMax, obj.financialsDaily.chg)
    }

    currentRatioFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.currentRatioMin, this.props.filterInputs.currentRatioMax, obj.financialsQuarterly.current_ratio)
    }

    debtToEquityFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.debtToEquityMin, this.props.filterInputs.debtToEquityMax, obj.financialsQuarterly.debt_to_equity)
    }

    divPerShareFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.divPerShareMin, this.props.filterInputs.divPerShareMax, obj.financialsQuarterly.div_per_share)
    }

    divYieldFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.divYieldMin, this.props.filterInputs.divYieldMax, obj.financialsDaily.div_yield)
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

    grossMrqFilter = (obj) => {
        return this.positiveValuesFilter(obj, this.props.filterInputs.grossMrqMin, this.props.filterInputs.grossMrqMax, obj.financialsQuarterly.gross_mrq)
    }

    monthlyPerfFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.monthlyPerfMin, this.props.filterInputs.monthlyPerfMax, obj.financialsDaily.monthly_perf)
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

    roaFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.roaMin, this.props.filterInputs.roaMax, obj.financialsQuarterly.roa)
    }

    roeFilter = (obj) => {
        return this.positiveAndNegativeValuesFilter(obj, this.props.filterInputs.roeMin, this.props.filterInputs.roeMax, obj.financialsQuarterly.roe)
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

        const filters = [this.oneYearBetaFilter, this.threeMonthsPerfFilter, this.sixMonthsPerfFilter, this.chgFilter, this.currentRatioFilter,
            this.debtToEquityFilter, this.divPerShareFilter, this.divYieldFilter, this.epsFyFilter, this.epsTtmFilter, this.epsDilutedFyFilter, this.epsDilutedTtmFilter,
            this.grossMrqFilter, this.monthlyPerfFilter, this.netMrqFilter, this.operatingMrqFilter, this.pEFilter, this.pBFilter, this.pretaxMrqFilter,
            this.priceFilter, this.priceToRevFilter, this.quickRatioFilter, this.roaFilter, this.roeFilter, this.volatilityFilter, this.weeklyPerfFilter,
            this.yearlyPerfFilter, this.ytdPerfFilter]

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

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    };

    handleChange = e => {
        this.props.handleFilterInputChange && this.props.handleFilterInputChange(e)
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

        const positiveInputRegex = /^\d*[.]?\d*$/
        const positiveAndNegativeInputRegex = /^-?\d*[.]?\d*$/

        const leftTextBox = {
            margin: "0 5px",
            width: "100px"
        }

        const rightTextBox = {
            marginLeft: "5px",
            width: "100px"
        }

        return (
            <div>
                <Dialog header="Choose filters"
                        visible={this.props.show}
                        style={{width: '60%'}}
                        modal={true}
                        onHide={e => {
                            this.onClose(e)
                        }}
                        footer={footer}
                >

                    <div className={styles.col1}>
                        <p>
                            1-Year Beta
                            <InputText id="oneYearBetaMin"
                                       value={this.props.filterInputs.oneYearBetaMin}
                                       name="oneYearBetaMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="oneYearBetaMax"
                                       value={this.props.filterInputs.oneYearBetaMax}
                                       name="oneYearBetaMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            6-Month Performance
                            <InputText id="sixMonthPerfMin"
                                       value={this.props.filterInputs.sixMonthPerfMin}
                                       name="sixMonthPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="sixMonthPerfMax"
                                       value={this.props.filterInputs.sixMonthPerfMax}
                                       name="sixMonthPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>

                        <p>
                            Div Yield %
                            <InputText id="divYieldMin"
                                       value={this.props.filterInputs.divYieldMin}
                                       name="divYieldMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="divYieldMax"
                                       value={this.props.filterInputs.divYieldMax}
                                       name="divYieldMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            EPS (TTM)
                            <InputText id="epsTtmMin"
                                       value={this.props.filterInputs.epsTtmMin}
                                       name="epsTtmMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="epsTtmMax"
                                       value={this.props.filterInputs.epsTtmMax}
                                       name="epsTtmMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            EPS Diluted (TTM)
                            <InputText id="epsDilutedTtmMin"
                                       value={this.props.filterInputs.epsDilutedTtmMin}
                                       name="epsDilutedTtmMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="epsDilutedTtmMax"
                                       value={this.props.filterInputs.epsDilutedTtmMax}
                                       name="epsDilutedTtmMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Operating Margin %
                            <InputText id="operatingMrqMin"
                                       value={this.props.filterInputs.operatingMrqMin}
                                       name="operatingMrqMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="operatingMrqMax"
                                       value={this.props.filterInputs.operatingMrqMax}
                                       name="operatingMrqMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            P/B Ratio
                            <InputText id="p_bMin"
                                       value={this.props.filterInputs.p_bMin}
                                       name="p_bMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="p_bMax"
                                       value={this.props.filterInputs.p_bMax}
                                       name="p_bMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Price
                            <InputText id="priceMin"
                                       value={this.props.filterInputs.priceMin}
                                       name="priceMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="priceMax"
                                       value={this.props.filterInputs.priceMax}
                                       name="priceMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Quick Ratio
                            <InputText id="quickRatioMin"
                                       value={this.props.filterInputs.quickRatioMin}
                                       name="quickRatioMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="quickRatioMax"
                                       value={this.props.filterInputs.quickRatioMax}
                                       name="quickRatioMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Return on Assets (TTM)
                            <InputText id="roaMin"
                                       value={this.props.filterInputs.roaMin}
                                       name="roaMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="roaMax"
                                       value={this.props.filterInputs.roaMax}
                                       name="roaMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Weekly Performance
                            <InputText id="weeklyPerfMin"
                                       value={this.props.filterInputs.weeklyPerfMin}
                                       name="weeklyPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="weeklyPerfMax"
                                       value={this.props.filterInputs.weeklyPerfMax}
                                       name="weeklyPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            YTD Performance
                            <InputText id="ytdPerfMin"
                                       value={this.props.filterInputs.ytdPerfMin}
                                       name="ytdPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="ytdPerfMax"
                                       value={this.props.filterInputs.ytdPerfMax}
                                       name="ytdPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                    </div>

                    <div className={styles.col2}>
                        <p>
                            3-Month Performance
                            <InputText id="threeMonthPerfMin"
                                       value={this.props.filterInputs.threeMonthPerfMin}
                                       name="threeMonthPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="threeMonthPerfMax"
                                       value={this.props.filterInputs.threeMonthPerfMax}
                                       name="threeMonthPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Change %
                            <InputText id="chgMin"
                                       value={this.props.filterInputs.chgMin}
                                       name="chgMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="chgMax"
                                       value={this.props.filterInputs.chgMax}
                                       name="chgMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Current Ratio
                            <InputText id="currentRatioMin"
                                       value={this.props.filterInputs.currentRatioMin}
                                       name="currentRatioMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="currentRatioMax"
                                       value={this.props.filterInputs.currentRatioMax}
                                       name="currentRatioMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Debt to Equity Ratio
                            <InputText id="debtToEquityMin"
                                       value={this.props.filterInputs.debtToEquityMin}
                                       name="debtToEquityMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="debtToEquityMax"
                                       value={this.props.filterInputs.debtToEquityMax}
                                       name="debtToEquityMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Dividend Per Share (FY)
                            <InputText id="divPerShareMin"
                                       value={this.props.filterInputs.divPerShareMin}
                                       name="divPerShareMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="divPerShareMax"
                                       value={this.props.filterInputs.divPerShareMax}
                                       name="divPerShareMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            EPS (FY)
                            <InputText id="epsFyMin"
                                       value={this.props.filterInputs.epsFyMin}
                                       name="epsFyMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="epsFyMax"
                                       value={this.props.filterInputs.epsFyMax}
                                       name="epsFyMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            EPS Diluted (FY)
                            <InputText id="epsDilutedFyMin"
                                       value={this.props.filterInputs.epsDilutedFyMin}
                                       name="epsDilutedFyMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="epsDilutedFyMax"
                                       value={this.props.filterInputs.epsDilutedFyMax}
                                       name="epsDilutedFyMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Gross Margin %
                            <InputText id="grossMrqMin"
                                       value={this.props.filterInputs.grossMrqMin}
                                       name="grossMrqMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="grossMrqMax"
                                       value={this.props.filterInputs.grossMrqMax}
                                       name="grossMrqMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Monthly Performance
                            <InputText id="monthlyPerfMin"
                                       value={this.props.filterInputs.monthlyPerfMin}
                                       name="monthlyPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="monthlyPerfMax"
                                       value={this.props.filterInputs.monthlyPerfMax}
                                       name="monthlyPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Net Margin %
                            <InputText id="netMrqMin"
                                       value={this.props.filterInputs.netMrqMin}
                                       name="netMrqMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="netMrqMax"
                                       value={this.props.filterInputs.netMrqMax}
                                       name="netMrqMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            P/E Ratio
                            <InputText id="p_eMin"
                                       value={this.props.filterInputs.p_eMin}
                                       name="p_eMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="p_eMax"
                                       value={this.props.filterInputs.p_eMax}
                                       name="p_eMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Pretax Margin %
                            <InputText id="pretaxMrqMin"
                                       value={this.props.filterInputs.pretaxMrqMin}
                                       name="pretaxMrqMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="pretaxMrqMax"
                                       value={this.props.filterInputs.pretaxMrqMax}
                                       name="pretaxMrqMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Price to Revenue Ratio
                            <InputText id="priceToRevMin"
                                       value={this.props.filterInputs.priceToRevMin}
                                       name="priceToRevMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="priceToRevMax"
                                       value={this.props.filterInputs.priceToRevMax}
                                       name="priceToRevMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Return on Equity (TTM)
                            <InputText id="roeMin"
                                       value={this.props.filterInputs.roeMin}
                                       name="roeMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="roeMax"
                                       value={this.props.filterInputs.roeMax}
                                       name="roeMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                        <p>
                            Volatility
                            <InputText id="volatilityMin"
                                       value={this.props.filterInputs.volatilityMin}
                                       name="volatilityMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                            -
                            <InputText id="volatilityMax"
                                       value={this.props.filterInputs.volatilityMax}
                                       name="volatilityMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveInputRegex}
                            />
                        </p>
                        <p>
                            Yearly Performance
                            <InputText id="yearlyPerfMin"
                                       value={this.props.filterInputs.yearlyPerfMin}
                                       name="yearlyPerfMin"
                                       onChange={this.handleChange}
                                       style={leftTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                            -
                            <InputText id="yearlyPerfMax"
                                       value={this.props.filterInputs.yearlyPerfMax}
                                       name="yearlyPerfMax"
                                       onChange={this.handleChange}
                                       style={rightTextBox}
                                       keyfilter={positiveAndNegativeInputRegex}
                            />
                        </p>
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default FilterComponent