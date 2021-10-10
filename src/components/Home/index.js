import React from 'react';

import ImgHouse from '../../assets/images/house.png';

import styles from './home.module.scss';

export default function Home () {
    return(
        <div className={styles.container}>
            <img src={ImgHouse} />
        </div>
    )
}