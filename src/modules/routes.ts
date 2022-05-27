import { Router } from 'express'
import { UserController } from './users/controller/UserController'

const userRouter = Router()
const userController = new UserController()

userRouter.post('/create', userController.createUser)

export default userRouter
