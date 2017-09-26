import uuid from 'uuid'

import recipes from './recipes.json'

export const resolvers = {
  Query: {
    // Query maps to types in schema
    recipes: () => {
      return recipes.recipes.map(({ id, name }) => ({
        id,
        name,
      }))
    },
  },
  Mutation: {
    addRecipe: (root, args, context) => {
      const newRecipe = { id: uuid(), name: args.name }
      recipes.push(newRecipe)
      return newRecipe
    },
  },
}
