import React from "react";
import axios from "axios"
import fieldSetStyle from "../componentStyles/CompanyInfoStyle.css"
import {Fieldset} from "primereact/fieldset";

class CompanyInfoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            ticker: {
                financialsDaily: {},
                financialsQuarterly: {}
            }
        }
    }

    componentDidMount() {

        axios.get("http://localhost:8080/companies/" + this.state.id)
            .then(response => {
                if (response.data !== null) {
                    this.setState({
                        ticker: response.data
                    })
                }
            })
    }

    render() {

        const nullValue = (
            <span style={{fontWeight: "normal"}}>
                -
            </span>
        )

        const value = (propValue) => {
            if (propValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                         {propValue}
                    </span>
                )
            }
        }

        const millionValue = (numericPropValue) => {
            if (numericPropValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                        {numericPropValue / 1000}M
                    </span>
                )
            }
        }

        const percentageValue = (percentagePropValue) => {
            if (percentagePropValue === null) {
                return nullValue
            } else {
                return (
                    <span style={{fontWeight: "normal"}}>
                        {(percentagePropValue * 100).toFixed(2)}%
                    </span>
                )
            }
        }

        return (

            <div>
                <h1>Ticker: {value(this.state.ticker.ticker_id)}</h1>
                <h2>Name: {value(this.state.ticker.name)}</h2>
                <h3>Sector: {value(this.state.ticker.sector)}</h3>
                <h3>Industry: {value(this.state.ticker.industry)}</h3>
                <h3>Employees: {value(this.state.ticker.employees)}</h3>
                <div>
                    <Fieldset style={fieldSetStyle} legend="Key Ratios">
                        <h4>Current Ratio: {value(this.state.ticker.financialsQuarterly.current_ratio)}</h4>
                        <h4>Debt/Equity: {value(this.state.ticker.financialsQuarterly.debt_to_equity)}</h4>
                        <h4>EPS (FY): {value(this.state.ticker.financialsQuarterly.eps_fy)}</h4>
                        <h4>EPS (TTM): {value(this.state.ticker.financialsQuarterly.eps_ttm)}</h4>
                        <h4>EPS Diluted (FY): {value(this.state.ticker.financialsQuarterly.eps_diluted_fy)}</h4>
                        <h4>EPS Diluted (TTM): {value(this.state.ticker.financialsQuarterly.eps_diluted_ttm)}</h4>
                        <h4>EV/EBITDA: {value(this.state.ticker.financialsDaily.ev_ebitda)}</h4>
                        <h4>Gross Margin: {percentageValue(this.state.ticker.financialsQuarterly.gross_mrq)}</h4>
                        <h4>Net Margin: {percentageValue(this.state.ticker.financialsQuarterly.net_mrq)}</h4>
                        <h4>Operating Margin: {percentageValue(this.state.ticker.financialsQuarterly.operating_mrq)}</h4>
                        <h4>Pretax Margin: {percentageValue(this.state.ticker.financialsQuarterly.pretax_mrq)}</h4>
                        <h4>Price/Revenue: {value(this.state.ticker.financialsDaily.price_rev)}</h4>
                        <h4>P/B: {value(this.state.ticker.financialsDaily.p_b)}</h4>
                        <h4>P/E: {value(this.state.ticker.financialsDaily.p_e)}</h4>
                        <h4>Quick Ratio: {value(this.state.ticker.financialsQuarterly.quick_ratio)}</h4>
                        <h4>ROA: {percentageValue(this.state.ticker.financialsQuarterly.roa)}</h4>
                        <h4>ROE: {percentageValue(this.state.ticker.financialsQuarterly.roe)}</h4>
                    </Fieldset>
                    <Fieldset style={fieldSetStyle} legend="Financials">
                        <h4>Annual Revenue: {millionValue(this.state.ticker.financialsQuarterly.annual_revenue)}</h4>
                        <h4>Assets: {millionValue(this.state.ticker.financialsQuarterly.assets)}</h4>
                        <h4>Debt: {millionValue(this.state.ticker.financialsQuarterly.debt)}</h4>
                        <h4>EBITDA: {millionValue(this.state.ticker.financialsQuarterly.ebitda)}</h4>
                        <h4>Enterprise Value: {millionValue(this.state.ticker.financialsDaily.ev)}</h4>
                        <h4>Gross Profit (FY): {millionValue(this.state.ticker.financialsQuarterly.gross_profit_fy)}</h4>
                        <h4>Gross Profit (MRQ): {millionValue(this.state.ticker.financialsQuarterly.gross_profit_mrq)}</h4>
                        <h4>Income: {millionValue(this.state.ticker.financialsQuarterly.income)}</h4>
                        <h4>Market Cap: {millionValue(this.state.ticker.financialsDaily.mkt_cap)}</h4>
                        <h4>Net Debt: {millionValue(this.state.ticker.financialsQuarterly.net_debt)}</h4>
                        <h4>Revenue: {millionValue(this.state.ticker.financialsQuarterly.revenue)}</h4>
                    </Fieldset>
                    <Fieldset style={fieldSetStyle} legend="Performance">
                        <h4>Change: {percentageValue(this.state.ticker.financialsDaily.chg)}</h4>
                        <h4>Weekly Performance: {percentageValue(this.state.ticker.financialsDaily.weekly_perf)}</h4>
                        <h4>Monthly Performance: {percentageValue(this.state.ticker.financialsDaily.monthly_perf)}</h4>
                        <h4>3 Month Performance: {percentageValue(this.state.ticker.financialsDaily.three_month_perf)}</h4>
                        <h4>6 Month Performance: {percentageValue(this.state.ticker.financialsDaily.six_month_perf)}</h4>
                        <h4>YTD Performance {percentageValue(this.state.ticker.financialsDaily.ytd_perf)}</h4>
                        <h4>1 Year Performance: {percentageValue(this.state.ticker.financialsDaily.yearly_perf)}</h4>
                        <h4>1 Year Beta: {value(this.state.ticker.financialsDaily.one_year_beta)}</h4>
                        <h4>Volatility: {percentageValue(this.state.ticker.financialsDaily.volatility)}</h4>
                    </Fieldset>
                    <Fieldset style={fieldSetStyle} legend="Dividends">
                        <h4>Dividend Yield: {percentageValue(this.state.ticker.financialsDaily.div_yield)}</h4>
                        <h4>Dividends Paid: {millionValue(this.state.ticker.financialsQuarterly.div_paid)}</h4>
                        <h4>Dividends Per Share (FY): {value(this.state.ticker.financialsQuarterly.div_per_share)}</h4>
                        <h4>Shares: {millionValue(this.state.ticker.financialsQuarterly.shares)}</h4>
                    </Fieldset>
                </div>
            </div>
        )
    }
}


export default CompanyInfoComponent