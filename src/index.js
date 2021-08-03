import startApolloServer from './apollo'
import { createServer } from 'http'
import appExpress from './express'
import socket from './socket'
import 'regenerator-runtime/runtime'
import dotenv from 'dotenv'
import moongose from './db'

dotenv.config()

const app = appExpress()
const serverHttp = createServer(app)
moongose()
socket(serverHttp)
startApolloServer(serverHttp, app)
