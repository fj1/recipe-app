import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import recipesReducer from 'reducers/recipes'

export default () => {
  const store = createStore(
    combineReducers({ recipes: recipesReducer }),
    composeWithDevTools(applyMiddleware(thunk)),
  )
  return store
}
