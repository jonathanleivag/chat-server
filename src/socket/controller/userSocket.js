import UserModel from '../../db/models/UserModel'
import MessageModel from '../../db/models/MessageModel'

export async function userOnline (id) {
  const user = await UserModel.findById(id)
  user.online = true
  await user.save()
}

export async function userDesconnect (id) {
  const user = await UserModel.findById(id)
  user.online = false
  await user.save()
}

export async function getUsers () {
  return await UserModel.find().sort('-online')
}

export async function saveMessage (payload) {
  try {
    const message = new MessageModel(payload)
    const {
      _id,
      from,
      to,
      message: message0,
      createdAt,
      updatedAt
    } = await message.save()

    return { id: _id, from, to, message: message0, createdAt, updatedAt }
  } catch (error) {
    console.log(error)
  }
}
