import { gql } from 'apollo-server-express'

export default gql`
  type User {
    id: ID
    name: String
    email: String
    online: String
    createdAt: String
    updatedAt: String
  }

  type ResUser {
    data: User
    message: String
    token: String
  }

  type ReNewToken {
    token: String
    user: User
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    password0: String!
    online: Boolean
  }

  input LoginInput {
    email: String!
    password: String!
  }

  extend type Query {
    reNewToken: ReNewToken
    isLogin: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput): ResUser
    login(input: LoginInput): ResUser
  }
`
