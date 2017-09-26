import React, { PureComponent } from 'react'
import { gql, graphql } from 'react-apollo'

class RecipesList extends PureComponent {
  render() {
    console.log(this.props)
    const { loading, recipes } = this.props.data

    return (
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          recipes.map(recipe => <div key={recipe.id}>{recipe.name}</div>)
        )}
      </div>
    )
  }
}

const recipesQuery = gql`
  query AllRecipes {
    recipes {
      id
      name
    }
  }
`

export default graphql(recipesQuery)(RecipesList)
