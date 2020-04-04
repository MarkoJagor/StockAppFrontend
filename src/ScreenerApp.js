import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CompanyInfoComponent from "./components/CompanyInfoComponent";
import TableTabsComponent from "./components/TableTabsComponent";

class ScreenerApp extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div>
                    <Switch>
                        <Route exact path={"/"} component={TableTabsComponent}/>
                        <Route path={"/ticker/:id"} component={CompanyInfoComponent}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ScreenerApp