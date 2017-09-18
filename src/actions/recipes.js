export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const recipesFetched = recipes => ({
  type: FETCHED_RECIPES,
  recipes,
})

export const fetchRecipes = () => async dispatch => {
  const response = await fetch('http://localhost:5000/recipes', {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
  const recipes = await response.json()

  dispatch(recipesFetched(recipes))
}
