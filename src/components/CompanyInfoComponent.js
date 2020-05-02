import React from "react";
import axios from "axios"
import {Fieldset} from "primereact/fieldset";
import fieldSetStyle from "../componentStyles/CompanyInfoStyle.css"

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

        axios.get("http://localhost:8080/company/" + this.state.id)
            .then(response => {
                if (response.data !== null) {
                    this.setState({
                        ticker: response.data
                    })
                }
            })
    }

    render() {
        const value = (value) => (
            <span style={{fontWeight: "normal"}}>
                {value}
            </span>
        )

        const millionValue = (numericValue) => (
            <span style={{fontWeight: "normal"}}>
                {numericValue / 1000}M
            </span>
        )

        return (
            <div>
                <h1>Ticker: {value(this.state.ticker.ticker_id)}</h1>
                <h2>Name: {value(this.state.ticker.name)}</h2>
                <div>
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
                </div>
            </div>
        )
    }
}


export default CompanyInfoComponent