import React from 'react';

import Icon from '../../Icon/Icon';
import styles from './cv_user_info.scss';
import { ComponentProps } from './UserInfo.d';

const UserInfo: React.SFC<ComponentProps> = ({ avatar, name, surname, position }) => (
    <div className={styles.container}>
        <img className={styles.image} src={avatar} alt={surname} />
        <Icon className={styles.mask} svg="#hexagon" />
        <h2 className={styles.name}>{name}</h2>
        <h2 className={styles.surname}>{surname}</h2>
        <h3 className={styles.position}>{position}</h3>
    </div>
);

export default UserInfo;

