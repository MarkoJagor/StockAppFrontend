import React from "react";
import StockMarket from "../image/StockMarket.PNG"

class HomeComponent extends React.Component {

    componentDidMount() {
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = null
    }


    render() {
        const container = {
            width: "100%",
            height: "50%",
            position: "absolute"
        }

        const image = {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: "0.35"
        }

        const h1 = {
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
            marginTop: "10vh",
            width: "1000px",
            textAlign: "center",
            fontSize: "500%",
        }

        const h2 = {
            position: "absolute",
            left: "50%",
            transform: "translate(-50%)",
            fontSize: "250%",
            marginTop: "25vh",
        }

        return (
            <div style={container}>
                <img src={StockMarket} style={image} alt={"Stock Market"}/>
                <h1 style={h1}>Welcome to FinTrust!</h1>
                <h2 style={h2}>Your guide to Tallinn Stock Exchange.</h2>
            </div>
        )
    }
}

export default HomeComponent