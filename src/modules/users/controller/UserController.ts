import { Request, Response } from "express";
import { User } from "../interfaces";
import { CreateUser } from "../services/CreateUser";

export class UserController {
  async createUser(req: Request, res: Response) {
    const {id, nome, email, senha}: User = req.body
    const create = new CreateUser()
    const result = await create.execute({id, nome, email, senha})

    return res.json(result)
  }
}
