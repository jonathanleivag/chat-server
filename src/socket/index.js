import socketIo from 'socket.io'
import { verify } from '../helpers/jwt'
import {
  userOnline,
  userDesconnect,
  getUsers,
  saveMessage
} from './controller/userSocket'

export default function socket (serverHttp) {
  const io = socketIo(serverHttp)

  io.on('connection', async socket => {
    console.log(`👌 Socket ready at http://localhost:${process.env.PORT}`)
    try {
      const { id, name } = verify(socket.handshake.query.token)
      await userOnline(id)
      console.log(`🧑 ${name} got online`)

      socket.join(id)

      io.emit('get-users', await getUsers())

      socket.on('send-message', async payload => {
        const message = await saveMessage(payload)
        io.to(payload.to).emit('send-message', message)
        io.to(payload.from).emit('send-message', message)
      })

      socket.on('disconnect', async () => {
        await userDesconnect(id)
        console.log(`🚪 ${name} logged out`)
        io.emit('get-users', await getUsers())
      })
    } catch (error) {
      socket.on('disconnect')
    }
  })
}
