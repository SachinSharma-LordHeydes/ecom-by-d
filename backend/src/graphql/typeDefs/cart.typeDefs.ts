import { gql } from "graphql-tag";

export const cartTypeDefs = gql`
  type Product {
    id: ID!
    productName: String!
    productPrice: String!
    productDescription: String!
    productImages: [ID!]!
    features: [String!]!
    discount: ID
    approveStatus: String
    ratingAndReviews: ID
    likesAndDislikes: ID
    createdAt: String!
    updatedAt: String!
  }

  type CartResponse {
    success: Boolean!
    message: String!
    cart: [Product!]!
  }

  input CartInput {
    productId: ID!
  }

  type Query {
    getCart(userId: ID!): [Product!]!
  }

  type Mutation {
    addToCart(input: CartInput!): [Product!]!
    removeFromCart(input: CartInput!): CartResponse!
  }
`;
