import { observer } from 'mobx-react';
import React, { Component } from 'react';

import Button, { ButtonTheme, ButtonIconPosition, ButtonColor} from '../../Button/Button';
import { ComponentProps } from './LinkList.d';

@observer
export default class LinkList extends Component<ComponentProps> {
    static defaultProps = {
        items: []
    }

    render() {
        const { items } = this.props;
        return (
            <div>
                {
                    items.map((item) => (
                        <Button
                            key={item.text}
                            theme={ButtonTheme.CV_LINK}
                            iconPosition={ButtonIconPosition.LEFT}
                            color={ButtonColor.WHITE}
                            glyph={item.icon}
                            text={item.text}
                            href={item.url}
                        />
                    ))
                }
            </div>
        );
    }
}