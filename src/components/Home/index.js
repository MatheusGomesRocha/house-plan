import React from 'react';

import ImgHouse from '../../assets/images/house.png';

import { AiOutlineSearch } from 'react-icons/ai';
import { FiGrid } from 'react-icons/fi';

import styles from './home.module.scss';

export default function Home () {
    return(
        <div className={styles.container}>
            <nav>
                <h2 className={styles.logo}>Lorem</h2>

                <div className={styles.actionIcons}>
                    <AiOutlineSearch style={{marginRight: '1rem'}} color="#fff" size={25} />
                    <FiGrid color="#fff" size={25} />
                </div>
            </nav>

            <div className={styles.content}>
                <h1>velit aliquet sagittis id consectetur purus</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>

                <div className={styles.buttonRow}>
                    <div className={styles.buttonBuy}>
                        <span>Buy Now</span>
                    </div>

                    <div className={styles.buttonExplore}>
                        <span>Explore</span>
                    </div>
                </div>
            </div>

            <img src={ImgHouse} />
        </div>
    )
}