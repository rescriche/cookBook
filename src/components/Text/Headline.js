import {React} from "react";
import styles from "./headline.module.scss"

const Headline = (props) => {
    return (
        <h1 className={styles.headline}>
            {props.children}
        </h1>
    )
}

export default Headline;