import React from "react";
import {TabMenu} from "primereact/tabmenu";
import {withRouter} from "react-router-dom";

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            items: [
                {
                    label: "Ticker",
                    icon: "pi pi-fw pi-home",
                    command: () => (this.props.history.push("/ticker"))

                },
                {
                    label: "Valuation",
                    icon: "pi pi-fw pi-home",
                    command: () => (this.props.history.push("/valuation"))
                }

            ],
        }

        this.onTabChange = this.onTabChange.bind(this)
    }

    onTabChange(event) {
        this.setState({
            activeItem: event.value
        })
    }

    render() {
        return (
            <
                div>
                < TabMenu
                    model={this.state.items}
                    activeItem={this.state.activeItem}
                    onTabChange={this.onTabChange}
                />
            </div>
        )
    }
}

export default withRouter(NavbarComponent)