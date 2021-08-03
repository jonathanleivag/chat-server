import { gql } from 'apollo-server-express'

export default gql`
  type Message {
    id: ID
    from: String
    to: String
    message: String
  }

  input getChatInput {
    from: String
  }

  extend type Query {
    getChat(input: getChatInput): [Message]
  }
`
