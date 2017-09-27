import { createApolloFetch } from 'apollo-fetch'

export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const fetch = createApolloFetch({
  uri: 'http://localhost:4000/graphql',
})

const execQuery = async (query, variables) => await fetch({ query, variables })

const recipesFetched = recipes => ({
  type: FETCHED_RECIPES,
  recipes,
})

export const fetchRecipes = query => async dispatch => {
  const response = await execQuery(query)

  dispatch(recipesFetched(response.data.recipes))
}
