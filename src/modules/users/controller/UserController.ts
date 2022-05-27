import { Request, Response } from "express";

import { User } from "../interfaces";

import { CreateUser } from "../services/CreateUser";
import { DeleteUser } from "../services/DeleteUser";
import { GetUser } from "../services/GetUser";

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
}
