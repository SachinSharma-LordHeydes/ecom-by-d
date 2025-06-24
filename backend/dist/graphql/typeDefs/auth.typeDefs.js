"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.authTypeDefs = (0, graphql_tag_1.gql) `
  enum Role {
    buyer
    seller
    admin
  }

  type User {
    id: ID!
    clerkId: String!
    email: String!
    role: Role!
    profile: Profile
    address: Address
    productsList: [Product]
    orderLists: [Order]
    cart: [Order]
    wishList: [Order]
    createdAt: String!
    updatedAt: String!
  }

  input SignUpInput {
    email: String!
    password: String!
  }

  type Profile {
    id: ID!
    # Define other Profile fields as needed
  }

  type Address {
    id: ID!
    # Define other Address fields as needed
  }

  type Product {
    id: ID!
    # Define other Product fields as needed
  }

  type Order {
    id: ID!
    # Define other Order fields as needed
  }

  type Query {
    me: User
    user(clerkId: String!): User
  }

  type Mutation {
    signupUser(signupInput: SignUpInput!): User!
    updateUserRole(clerkId: String!, role: Role!): User
  }
`;
