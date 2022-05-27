import { Request, Response } from "express";
import { ErrorRequest } from "../../../error/http";

import { User } from "../interfaces";

import { CreateUser } from "../services/CreateUser";
import { DeleteUser } from "../services/DeleteUser";
import { GetUser } from "../services/GetUser";
import { LoginUser } from "../services/LoginUser";
import { Password } from "../services/Password";
import { Users } from "../typeorm/entities/Users";

export class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    const {id, nome, email, senha}: User = req.body
    const create = new CreateUser()
    const result = await create.execute({id, nome, email, senha})

    return res.json(result)
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.body
    const deleteUser = new DeleteUser()
    const result = await deleteUser.execute(id)

    if(result.length === 0) return res.status(200).json({
      status: 'success',
      message: 'Usuário deletado com sucesso.'
    })
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const userService = new GetUser()
    const user = await userService.execute(id)

    return res.json(user)
  }

  async getAllUsers(req: Request, res: Response): Promise<Users[] | undefined> {
    const usersService = new GetUser()
    const allUsers = await usersService.getAllUsers()

    return allUsers
  }

  async loginUser(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body

    const loginService = new LoginUser()
    const emailExists = await loginService.execute(email)

    if(emailExists !== undefined) {
      const senhaSalva = emailExists.senha
      const passwordIsCorrect = new Password().comparePassword(senha, senhaSalva)

      if(!passwordIsCorrect) {
        return res.status(400).json({
          status: 'failed',
          message:'Email ou senha incorreta.'
        })
      }

      return res.status(200).json({
        status: 'success',
        userLogged: true
      })
    }

    return res.status(400).json({
      status: 'failed',
      message:'Email ou senha incorreta.'
    })
  }
}
