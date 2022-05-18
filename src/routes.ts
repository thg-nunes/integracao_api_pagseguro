import express, { Request, Response } from 'express'

const routes = express.Router()

routes.post('/cadastro', (req: Request, res: Response) => {
  console.log(req.body)
})

export default routes
