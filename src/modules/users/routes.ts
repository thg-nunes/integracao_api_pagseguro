import { Router } from 'express'
import { UserController } from './controller/UserController'

const userRouter = Router()
const userController = new UserController()

userRouter.get('/:id', userController.getUser)
userRouter.post('/create', userController.createUser)
userRouter.delete('/delete/:id', userController.deleteUser)

export default userRouter
