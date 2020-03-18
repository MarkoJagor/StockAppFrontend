import React from "react";
import {TabMenu} from "primereact/tabmenu";

class NavbarComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [

                {
                    label: "Ticker", icon: "pi pi-fw pi-home", command: (this.navigateToPage("/ticker"))//, url: "http://localhost:3000/"

                },
                {
                    label: "Valuation", icon: "pi pi-fw pi-home", command: (this.navigateToPage("/valuation"))//, url: "http://localhost:3000/valuation"
                }

            ],
        }

        this.onTabChange = this.onTabChange.bind(this)
    }

    navigateToPage = (path) => {
        console.log('Navigate to path ' + path);
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

export default NavbarComponent