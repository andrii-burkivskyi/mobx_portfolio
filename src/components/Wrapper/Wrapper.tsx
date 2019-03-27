import React, { Component } from 'react';
import bem from '../../utils/bem';

import { ComponentProps } from './WrapperTypes.d'

import styles from "./wrapper.scss";

class Wrapper extends Component<ComponentProps> {
    render() {
        const { theme, children } = this.props;
        return (
            <div className={bem(styles.container, { theme })}>
                {children}
            </div>
        )
    }
}


export { WrapperTheme } from "./WrapperTypes.d"
export default Wrapper;
