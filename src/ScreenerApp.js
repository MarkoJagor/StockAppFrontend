import React from "react";
import TickerComponent from "./components/TickerComponent";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent";
import ValuationComponent from "./components/ValuationComponent";

class ScreenerApp extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div>
                    <NavbarComponent/>
                    <Switch>
                        <Route exact path={["/", "/ticker"]}
                               component={TickerComponent}/>
                        <Route exact path={"/valuation"} component={ValuationComponent}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}

export default ScreenerApp