import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express'

import routes from './routes'
import './services/typeorm'
import { ErrorRequest } from "./error/http"

const app = express()
const PORT= 3333

app.use(express.json())
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof ErrorRequest) {
    return res.status(error.status).json({
      status: 'error',
      message: error.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Erro desconhecido, tente novaamente mais tarde.'
  })
})
app.use(routes)

app.listen(PORT, () => console.log('server runing!'))

