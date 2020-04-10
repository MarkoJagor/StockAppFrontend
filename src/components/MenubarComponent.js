import React from "react";
import {withRouter} from "react-router-dom"
import {Menubar} from "primereact/menubar";
import style from "../componentStyles/MenubarComponentStyle.css"

class MenubarComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    label: "Home",
                    icon: "pi pi-home",
                    command: () => (this.props.history.push("/"))
                },
                {
                    label: "Screener",
                    icon: "pi pi-desktop",
                    command: () => (this.props.history.push("/screener"))
                }
            ]
        }
    }

    render() {
        return (
            <Menubar model={this.state.items} style={style}></Menubar>
        )
    }
}

export default withRouter(MenubarComponent)