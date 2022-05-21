import "reflect-metadata"
import express from 'express'

import routes from './routes'
import './services/typeorm'

const app = express()
const PORT= 3333

app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log('server runing!'))

