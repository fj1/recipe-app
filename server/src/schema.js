import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools'

import {resolvers} from './resolvers'

// define our types, ie recipes, users
// type definition language is syntatic sugar on the type def api
// must define Query
const typeDefs = `
  type Recipe {
    id: String!
    name: String!
  }

  type Query {
    recipes: [Recipe]!
  }

  type Mutation {
    addRecipe(name: String!): Recipe
  }
`

const schema = makeExecutableSchema({typeDefs, resolvers})
export {schema} 