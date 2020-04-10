import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CompanyInfoComponent from "./components/CompanyInfoComponent";
import ScreenerComponent from "./components/ScreenerComponent";
import MenubarComponent from "./components/MenubarComponent";

class ScreenerApp extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div>
                    <MenubarComponent/>
                    <Switch>
                        <Route exact path={"/screener"} component={ScreenerComponent}/>
                        <Route path={"/screener/:id"} component={CompanyInfoComponent}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ScreenerApp