import { gql } from "graphql-tag";

export const authTypeDefs = gql`
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