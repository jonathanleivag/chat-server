import { Schema, model } from 'mongoose'

const messageSchema = new Schema(
  {
    from: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    to: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    message: { type: String, required: true }
  },
  { versionKey: false, timestamps: true }
)

export default model('Message', messageSchema)
