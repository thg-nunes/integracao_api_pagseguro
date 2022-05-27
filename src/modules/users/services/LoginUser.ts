import { getCustomRepository } from "typeorm";

import { UserRepositorie } from "../typeorm/repositories/UserRepositorie";

export class LoginUser {
  async execute(email: string) {
    const userRepositorie = getCustomRepository(UserRepositorie)
    const emailExists = await userRepositorie.findByEmailUser(email)

    return emailExists
  }
}
