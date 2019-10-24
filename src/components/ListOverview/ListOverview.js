import React from 'react'
import { connect } from 'react-redux'
import { addItem } from "../../store/recipes/recipeActions";

class ListOverview extends React.Component {
    addAction() {
        this.props.addItem('text')
    };

    render() {
        return (
            <button onClick={this.addAction()}>Add Recipe</button>
        )
    }
}

const mapDispatchToProps = {
    addItem
}


export default connect(null, mapDispatchToProps)(ListOverview);