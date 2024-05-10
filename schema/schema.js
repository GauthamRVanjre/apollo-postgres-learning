import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Query to get a list of Users"
    getUsers: [User!]!
  }

  type Mutation {
    "Mutation to add a new User"
    addUser: [User!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;
