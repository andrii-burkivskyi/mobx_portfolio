import React, {Component} from "react";
import ReactDOM from "react-dom"

const portalRoot = document.getElementById("portals");

export default class Portal extends Component {
    portalElement: HTMLDivElement;
    constructor(props: any) {
        super(props)
        this.portalElement = document.createElement("div");
    }

    componentDidMount() {
        portalRoot && portalRoot.appendChild(this.portalElement);
    }

    componentWillUnmount() {
        portalRoot && portalRoot.removeChild(this.portalElement);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.portalElement
        )
    }
}