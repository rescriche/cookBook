import React from 'react';
import {connect} from 'react-redux';
import ItemCreator from "../ItemCreator/ItemCreator";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./listOverview.module.scss";

class ListOverview extends React.Component {
    constructor(prop) {
        super(prop);

        this.state = {
            openCreator: false
        };
    }

    componentDidMount() {
        if ( this.props.items && this.props.items.length ) {
            this.showItems();
        }
    }

    componentDidUpdate(prevProps) {
        if ( this.props.items && (this.props.items.length !== prevProps.items.length) ) {
            this.showItems();
        }
        // console.log('-----componentDidUpdate----')
        // console.log('prevProps.items.length', prevProps.items.length);
        // console.log('this.props.items.length', this.props.items.length);
    }

    showItems = ( ) => {
        console.log('showItems')
        console.log(this.props.items)
        const {
            items
        } = this.props;

        let index = 0;
        if (items && items.length > 0) {
            return items.map( item => {
                index ++;
                console.log('item', item)
                console.log('index', index)
                return (
                    <ItemCard
                        id={'index_' + index}
                        name={item.inputValue}
                        description={item.textareaValue}
                    />
                )
            });
        }

    };

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
                <div className={styles.itemWrapper}>
                    { this.showItems() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     console.log('state', state.recipes);
    const recipes = state.recipes;
    return {
        items: recipes.items
    };
};

export default connect(mapStateToProps)(ListOverview);