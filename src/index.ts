import express from 'express' // ESModules
import { router } from './routes/routes'

const app = express()
app.use(express.json()) // middleware to parse  req.boody to json body

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Todo bien')
    res.send("Pong")
})
app.use('/api/routes', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})