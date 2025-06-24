"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// This function accepts getToken as a callback (not called here)
export const createApolloClient = (getToken: () => Promise<string | null>) => {
  const httpLink = new HttpLink({
    uri: "http://localhost:8000/graphql",
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
