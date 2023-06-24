import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import mongoose from 'mongoose'

import { router } from './routes/routes'

const app = express()
app.use(cors({
  credentials: true
}
))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
  console.log('Server running on port 8080')
})

app.get('/ping', (_req, res) => {
  console.log('Todo bien')
  res.send('Hola Todo bien')
})
app.use('/api/tasks', router)

export default app

const MONGO_URL = 'mongodb+srv://Admin:miiUReg2MZgpYtSC@cluster1.chodwcu.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error))
