import gql from "graphql-tag";

export const addressTypeDefs = gql`
  type Address {
    id: ID!
    provinceNumber: String
    addressLabel: String
    provinceName: String
    pinCode: String
    locality: String
    city: String
    landMark: String
    createdAt: String!
    updatedAt: String!
  }

  input CreateAddressInput {
    provinceNumber: String
    addressLabel: String
    provinceName: String
    pinCode: String
    locality: String
    city: String
    landMark: String
  }

  input UpdateAddressInput {
    provinceNumber: String
    addressLabel: String
    provinceName: String
    pinCode: String
    locality: String
    city: String
    landMark: String
  }

  extend type Query {
    getAddress(id: ID!): Address
  }

  extend type Mutation {
    createAddress(input: CreateAddressInput!): Address!
    updateAddress(id: ID!, input: UpdateAddressInput!): Address
  }
`;