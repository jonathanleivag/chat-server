import { resolve } from 'path'
import cors from 'cors'
import express from 'express'

export default function appExpress () {
  const app = express()
  app.use(cors())
  app.use(express.static(resolve(__dirname, '../../public')))
  return app
}
