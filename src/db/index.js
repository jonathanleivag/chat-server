import mongoose from 'mongoose'

export default function connect () {
  mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error: 🔴'))
  db.once('open', () => {
    console.log('🍃 Mongo db ready')
  })
}
