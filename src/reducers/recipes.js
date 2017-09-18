import { FETCHED_RECIPES } from '../actions/recipes'

export default (state = [], action) => {
  switch (action.type) {
    case FETCHED_RECIPES:
      return action.recipes
    default:
      return state
  }
}
