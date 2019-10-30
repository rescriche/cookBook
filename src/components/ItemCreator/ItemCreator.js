import React from 'react';
import styles from './itemCreator.module.scss'
import { connect } from 'react-redux'
import { addItem } from "../../store/recipes/recipeActions";

class ItemCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }

    onChangeInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    onChangeTextareaValue = (event) => {
        this.setState({
            textareaValue: event.target.value
        })
    };

    submitItem = (event) => {
        event.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            inputValue: '',
            textareaValue: ''
        })

    };

    render() {
        const {
            inputValue,
            textareaValue
        } = this.state;

        return (
            <div className={styles.wrapper + (this.props.open ? ' ' + styles.open : '')}>
                <form className={styles.form}>
                    <input
                        className={styles.input}
                        type='text'
                        name='name'
                        value={inputValue}
                        onChange={this.onChangeInputValue}
                    />
                    <textarea className={styles.textarea} value={textareaValue} onChange={this.onChangeTextareaValue}/>
                    <button className={styles.btn} type='submit' onClick={this.submitItem}>Add recipe</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = {
    addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCreator);