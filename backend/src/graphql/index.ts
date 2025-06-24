import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "graphql-tag";
import { addresssResolvers } from "./resolvers/address.resolvers";
import { authResolvers } from "./resolvers/auth.resolvers";
import { cartResolver } from "./resolvers/cart.resolvers";
import { profileResolvers } from "./resolvers/profile.resolverse";
import { addressTypeDefs } from "./typeDefs/address.typeDefs";
import { authTypeDefs } from "./typeDefs/auth.typeDefs";
import { cartTypeDefs } from "./typeDefs/cart.typeDefs";
import { profileTypeDefs } from "./typeDefs/profile.typeDefs";

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  authTypeDefs,
  profileTypeDefs,
  addressTypeDefs,
  cartTypeDefs,
]);
const resolvers = mergeResolvers([
  authResolvers,
  profileResolvers,
  addresssResolvers,
  cartResolver,
]);

export { resolvers, typeDefs };
