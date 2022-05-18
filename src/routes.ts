import express, {Request, Response} from 'express'
import { Cadastro } from './controllers/routers/cadastro/cadastro'

const routes = express.Router()

routes.post('/cadastro', (req: Request, res: Response) => {
  new Cadastro().insertData(req, res)
})

export default routes
