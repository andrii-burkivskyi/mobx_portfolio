import React, {Component} from "react";

import styles from "./widget.scss"

class Container extends Component {
    render() {
        return (
            <div className={styles.container}>{this.props.children}</div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>{this.props.children}</header>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h3 className={styles.title}>{this.props.children}</h3>
        );
    }
}



export default { Container, Header, Title };