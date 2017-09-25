import uuid from 'uuid'

const recipes = []

export const resolvers = {
  Query: { // Query maps to types in schema
    recipes: () => recipes
  },
  Mutation: {
    addRecipe: (root, args) => {
      const newRecipe = { id: uuid(), name: args.name}
      recipes.push(newRecipe)
      return newRecipe
    }
  }
}