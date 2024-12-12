import express, { type Request, type Response } from 'express'
import { initializeAPI } from './api'
const app = express()
const port = 3000

app.use(express.json())

initializeAPI(app)

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})



