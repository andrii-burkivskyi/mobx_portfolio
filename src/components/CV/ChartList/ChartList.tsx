import React, { Component } from "react";

import bem from "../../../utils/bem";
import { ChartListColor, ChartListSize, ComponentProps } from "./ChartList.d";
import styles from "./cv_chart_list.scss";

export default class ChartList extends Component<ComponentProps> {
    static defaultProps = {
        items: [],
        color: ChartListColor.WHITE,
        size: ChartListSize.SMALL
    }

    render() {
        const { items, color, size } = this.props;
        return (
            <div className={bem(styles.container, { color, size })}>
                {
                    items.map((item) => (
                        <div key={item.text} className={bem(styles.chart_container, { color, size })}>
                            <span className={bem(styles.chart_text, { color, size })}>
                                {item.text}
                            </span>

                            <span
                                className={bem(styles.chart_value, { color, size })}
                                style={{ backgroundSize: `${item.value} 100%` }}
                            >
                                {' '}
                            </span>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export { ChartListColor, ChartListSize } from "./ChartList.d";