// src/graphql/index.ts
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    dummy: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!", // Example resolver
  },
  Mutation: {
    dummy: () => "This is a dummy mutation", // Example resolver
  },
};

export { typeDefs, resolvers };