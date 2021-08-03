import { gql } from 'apollo-server-express'
import messageType from './messageType'
import userType from './userType'

const typeDefs = gql`
  type Query {
    hello: String
  }
`

export default [typeDefs, userType, messageType]
