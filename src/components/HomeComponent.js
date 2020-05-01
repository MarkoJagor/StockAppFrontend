import React from "react";
import axios from "axios"
import {Messages} from "primereact/messages";
import inputStyle from "../componentStyles/HomeComponentStyle.css"
import StockMarket from "../image/StockMarket.PNG"
import {AutoComplete} from "primereact/autocomplete";
import {Button} from "primereact/button";

class HomeComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            tickers: [],
            filteredTickers: [],
            ticker: ""
        }
    }

    componentDidMount() {
        document.body.style.overflow = "hidden"
        axios.get("http://localhost:8080/company")
            .then(response => {
                this.setState({
                    tickers: response.data.map(obj => obj.ticker_id)
                })
            })
    }

    componentWillUnmount() {
        document.body.style.overflow = null
    }

    filterTickers = (event) => {
        setTimeout(() => {
            let results = this.state.tickers.filter((ticker) => {
                return ticker.toLowerCase().startsWith(event.query.toLowerCase());
            })
            this.setState({
                filteredTickers: results
            })
        }, 250)
    }

    onSearch = () => {
        if (this.state.tickers.includes(this.state.ticker.toUpperCase())) {
            window.open(("http://localhost:3000/screener/" + this.state.ticker.toUpperCase()), "_blank")
        } else {
            this.showError()
        }
    }

    showError = () => {
        this.messages.show({severity: "error", summary: "Error message", detail: "Validation failed!", closable: false})
    }

    render() {
        const parentContainer = {
            position: "relative",
            height: "100vh",
        }

        const upperContainer = {
            width: "100%",
            height: "50%",
            textAlign: "center"
        }

        const lowerContainer = {
            width: "100%",
            height: "50%",
            align: "center"
        }

        const image = {
            position: "absolute",
            width: "100%",
            height: "50%",
            opacity: "0.35",
            zIndex: "-1"
        }

        const h1 = {
            margin: "auto",
            paddingTop: "10vh",
            width: "100vw",
            textAlign: "center",
            fontSize: "8vh"
        }

        const h2 = {
            margin: "auto",
            fontSize: "3.5vh"
        }

        /*return (
            <div>
                <Messages ref={(el) => this.messages = el}/>
                <div style={inputStyle} className="p-inputgroup">
                    <AutoComplete value={this.state.ticker} suggestions={this.state.filteredTickers} completeMethod={this.filterTickers}
                                  size={this.state.tickers.size} placeholder={"Search for tickers"} minLength={1}
                                  onChange={(e) => this.setState({ticker: e.value})}/>
                    <Button icon={"pi pi-search"} onClick={this.onSearch}/>
                </div>
            </div>
        )*/

        return (
            <div style={parentContainer}>
                <img src={StockMarket} style={image} alt={"Stock Market"}/>
                <div style={upperContainer}>
                    <h1 style={h1}>Welcome to FinTrust!</h1>
                    <h2 style={h2}>Your guide to Tallinn Stock Exchange.</h2>
                </div>
                <div style={lowerContainer}>
                    <Messages ref={(el) => this.messages = el}/>
                    <div style={inputStyle} className="p-inputgroup">
                        <AutoComplete value={this.state.ticker} suggestions={this.state.filteredTickers} completeMethod={this.filterTickers}
                                      size={this.state.tickers.size} placeholder={"Search for tickers"} minLength={1}
                                      onChange={(e) => this.setState({ticker: e.value})}/>
                        <Button icon={"pi pi-search"} onClick={this.onSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent