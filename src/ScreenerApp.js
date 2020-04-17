import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CompanyInfoComponent from "./components/CompanyInfoComponent";
import ScreenerDataComponent from "./components/ScreenerDataComponent";
import MenubarComponent from "./components/MenubarComponent";

class ScreenerApp extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div>
                    <MenubarComponent/>
                    <Switch>
                        <Route exact path={"/screener"} component={ScreenerDataComponent}/>
                        <Route path={"/screener/:id"} component={CompanyInfoComponent}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default ScreenerApp