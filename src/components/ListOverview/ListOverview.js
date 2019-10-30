import React from 'react'
import ItemCreator from "../ItemCreator/ItemCreator";
import styles from "./listOverview.module.scss";

class ListOverview extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            openCreator: false
        };
    }

    toggleCreator = () => {
          this.setState({
             openCreator: !this.state.openCreator
          })
    };

    render() {
        return (
            <div>
                <button className={styles.toggleBtn} type='button' onClick={this.toggleCreator}>+ open</button>
                <ItemCreator open={this.state.openCreator}/>
            </div>
        )
    }
}

export default ListOverview;