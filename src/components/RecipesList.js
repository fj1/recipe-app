import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/recipes'

class RecipesList extends PureComponent {
  componentDidMount = () => {
    this.props.fetchRecipes()
  }

  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <div key={recipe.id}>{recipe.name}</div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps, actions)(RecipesList)
