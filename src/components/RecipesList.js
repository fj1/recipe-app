import React, { PureComponent } from 'react'

class RecipesList extends PureComponent {
  state = {
    recipes: [],
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:5000/recipes', {
      method: 'GET',
      headers: { accept: 'application/json' },
    })
    const recipes = await response.json()
    this.setState({
      recipes,
    })
  }

  render() {
    return (
      <div>
        {this.state.recipes.map(recipe => (
          <div key={recipe.id}>{recipe.name}</div>
        ))}
      </div>
    )
  }
}

export default RecipesList
