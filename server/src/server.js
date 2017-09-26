import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { schema, rootValue, context } from './schema'

const PORT = 4000
const server = express()

server.use('*', cors({ origin: 'http://localhost:3000' }))

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(request => ({
    schema,
    rootValue,
    context: context(request.headers, process.env),
  })),
)

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    query: ``,
  }),
)

server.listen(PORT, () => {
  console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`,
  )
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
})
