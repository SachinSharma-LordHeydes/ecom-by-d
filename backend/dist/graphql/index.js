"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
const graphql_tag_1 = require("graphql-tag");
const auth_resolvers_1 = require("./resolvers/auth.resolvers");
const auth_typeDefs_1 = require("./typeDefs/auth.typeDefs");
const baseTypeDefs = (0, graphql_tag_1.gql) `
  type Query
  type Mutation
`;
const typeDefs = (0, merge_1.mergeTypeDefs)([baseTypeDefs, auth_typeDefs_1.authTypeDefs]);
exports.typeDefs = typeDefs;
const resolvers = (0, merge_1.mergeResolvers)([auth_resolvers_1.authResolvers]);
exports.resolvers = resolvers;
