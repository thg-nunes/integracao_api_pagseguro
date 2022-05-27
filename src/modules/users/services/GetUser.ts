import { getCustomRepository } from "typeorm";

import { UserRepositorie } from "../typeorm/repositories/UserRepositorie";

export class GetUser {
  async execute(id: string) {
    const userRepositore = getCustomRepository(UserRepositorie)
    const user = await userRepositore.findByUser(id)

    if(!user) return []

    return user
  }

  async getAllUsers() {
    const allUsersRepositorie = getCustomRepository(UserRepositorie)
    const allUsers = await allUsersRepositorie.findByAllUsers()

    return allUsers
  }
}
