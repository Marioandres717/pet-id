import fetch from "isomorphic-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // eslint-disable-next-line no-undef
    uri: process.env.GATSBY_GRAPHQL_URI,
    fetch,
  }),
})

export default client
