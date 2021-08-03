import MessageModel from '../../db/models/MessageModel'
import { verify } from '../../helpers/jwt'

export default {
  Query: {
    getChat: async (_, { input }, { token }) => {
      const { id } = verify(token)
      const { from } = input

      const last30 = await MessageModel.find({
        $or: [
          { from: id, to: from },
          { to: id, from: from }
        ]
      })
        .sort({ createdAt: 'desc' })
        .limit(30)

      return last30
    }
  }
}
