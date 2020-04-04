import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import TickerComponent from "./TickerComponent";
import ValuationComponent from "./ValuationComponent";

class TableTabsComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            activeIndex: 1
        }
    }

    render() {
        return (
            <TabView activeIndex={this.state.activeIndex} renderActiveOnly={false}
                     onTabChange={(e) => this.setState({activeIndex: e.index})}>
                <TabPanel header="Header I">
                    <TickerComponent/>
                </TabPanel>
                <TabPanel header="Header II">
                    <ValuationComponent/>
                </TabPanel>
            </TabView>
        )
    }
}

export default TableTabsComponent