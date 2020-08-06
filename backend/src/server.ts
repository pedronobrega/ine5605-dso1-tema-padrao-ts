import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import routes from './routes/routes'
import connection from "./database/connection"
import bodyParser from 'body-parser'

connection.create()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(3333)