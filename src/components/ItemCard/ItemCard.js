import React from 'react'
import styles from './ItemCard.module.scss'

const ItemCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                {props.name}
            </div>
            <div className={styles.desc}>
                {props.description}
            </div>
        </div>
    );
};

export default ItemCard;