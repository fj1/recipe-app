import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/recipes'

class RecipesList extends PureComponent {
  componentDidMount = () => {
    this.props.fetchRecipes(recipesQuery)
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

const recipesQuery = `
  query AllRecipes {
    recipes {
      id
      name
    }
}`

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps, actions)(RecipesList)
