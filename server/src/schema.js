import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'

import { resolvers } from './resolvers'

// Construct a schema, using GraphQL schema language
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

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export function context(headers, secrets) {
  return {
    headers,
    secrets,
  }
}
