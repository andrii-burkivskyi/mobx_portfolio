import { observer } from 'mobx-react';
import React, { Component } from 'react';

import bem from '../../../utils/bem';
import Icon from '../../Icon/Icon';
import styles from './cv_list_block.scss';
import { ComponentProps, ListBlockColor } from './ListBlock.d';

@observer
class ListBlock extends Component<ComponentProps> {
    static defaultProps = {
        color: ListBlockColor.WHITE
    }

    render() {
        const { icon, title, color, children } = this.props;
        return (
            <div className={bem(styles.container, { color })}>
                <div className={bem(styles.title_container, { color })}>
                    <div className={bem(styles.title_background, { color })}>
                        <Icon className={bem(styles.title_icon, { color })} glyph={icon} />
                        <span className={bem(styles.title_text, { color })}>{title}</span>
                    </div>
                </div>
                {children}
            </div>
        )
    }
}

export { ListBlockColor } from "./ListBlock.d"
export default ListBlock;
