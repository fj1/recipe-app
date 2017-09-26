import uuid from 'uuid'

import recipes from './recipes.json'

const recipesDB = recipes.recipes

export const resolvers = {
  Query: {
    // Query maps to types in schema
    recipes: () => {
      return recipesDB.map(({ id, name }) => ({
        id,
        name,
      }))
    },
  },
  Mutation: {
    addRecipe: (root, args, context) => {
      const newRecipe = { id: uuid(), name: args.name }
      recipesDB.push(newRecipe)
      return newRecipe
    },
  },
}
