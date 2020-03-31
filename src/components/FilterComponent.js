import React from "react";
import {Dialog} from "primereact/dialog";
import {Button} from "primereact/button";


class FilterComponent extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    };


    render() {

        const footer = (
            <div>
                <Button label="Close" icon="pi pi-times" onClick={this.onClose}/>
            </div>
        );


        if (!this.props.show) {
            return null;
        }

        return (
            <div>
                <Dialog header="Choose filters"
                        visible={this.props.show}
                        style={{width: '50vw'}}
                        modal={true}
                        onHide={e => {
                            this.onClose(e)
                        }}
                        footer={footer}>
                    Content
                </Dialog>
            </div>
        )
    }
}

export default FilterComponent