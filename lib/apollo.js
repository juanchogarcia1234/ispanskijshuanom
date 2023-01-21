// Add Apollo Client to this file
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  cache: new InMemoryCache(), //caches the request you make in your app memory so instead having to go to wordpress each time, just uses it
});
