import { merge } from 'lodash'
import userResolver from './userResolver'
import messageResolver from './messageResolver'

const resolvers = {
  Query: {
    hello: () => 'Hello world!'
  }
}

export default merge(resolvers, userResolver, messageResolver)
