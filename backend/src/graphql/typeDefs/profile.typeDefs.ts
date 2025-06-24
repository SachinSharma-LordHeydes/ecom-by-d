// graphql/typeDefs/profile.typeDefs.ts
import { gql } from "graphql-tag";

export const profileTypeDefs = gql`
  type Profile {
    id: ID!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateProfileInput {
    firstName: String!
    lastName: String!
    phoneNumber: String!
  }

  input UpdateProfileInput {
    firstName: String
    lastName: String
    phoneNumber: String
  }

  extend type Mutation {
    createProfile(input: CreateProfileInput!): Profile!
    updateProfile(id: ID!, input: UpdateProfileInput!): Profile
  }

  extend type Query {
    getProfile(id: ID!): Profile
  }
`;
