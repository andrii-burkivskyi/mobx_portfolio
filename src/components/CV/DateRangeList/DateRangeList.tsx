import React, { Component } from 'react';

import styles from './cv_date_range_list.scss';

interface ComponentProps {
    items: Array<{ position: string; time: string; organization: string; description: string; }>
}

export default class DateRangeList extends Component<ComponentProps> {
    static defaultProps = {
        items: []
    }

    render() {
        const { items } = this.props;
        return (
            <div>
                {
                    items.map((item) => (
                        <div key={item.time} className={styles.date_range_container} >
                            <div className={styles.title}>
                                <span className={styles.position}>{item.position}</span>
                                <span className={styles.delimiter}>/</span>
                                <span className={styles.time}>{item.time}</span>
                            </div>
                            <div className={styles.info}>
                                {
                                    item.organization &&
                                    <span className={styles.organization}>
                                        {item.organization}:
                                    </span>
                                }
                                <span className={styles.description}>
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}