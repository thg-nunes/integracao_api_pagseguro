import { Router } from 'express'
import { UserController } from './controller/UserController'

const userRouter = Router()
const userController = new UserController()

userRouter.get('/:id', userController.getUser)
userRouter.get('/all', userController.getAllUsers)
userRouter.post('/create', userController.createUser)
userRouter.post('/login', userController.loginUser)
userRouter.delete('/delete/:id', userController.deleteUser)

export default userRouter
