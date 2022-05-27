import express from 'express'
import userRouter from './modules/users/routes'

const routes = express.Router()

routes.use('/user', userRouter)

export default routes
