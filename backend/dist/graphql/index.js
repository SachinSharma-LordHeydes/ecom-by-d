"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
const graphql_tag_1 = require("graphql-tag");
const baseTypeDefs = (0, graphql_tag_1.gql) `
  type Query {
    _empty: String
  }

  # Add your real queries and mutations below...
  type Mutation {
    _empty: String
  }
`;
exports.typeDefs = (0, merge_1.mergeTypeDefs)([]);
exports.resolvers = (0, merge_1.mergeResolvers)([]);
