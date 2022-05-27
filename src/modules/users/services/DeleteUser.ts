import { getCustomRepository } from "typeorm";
import { ErrorRequest } from "../../../error/http";
import { UserRepositorie } from "../typeorm/repositories/UserRepositorie";

export class DeleteUser {
  async execute(id: string) {
    const userRepositore = getCustomRepository(UserRepositorie)
    const user = await userRepositore.findOne(id)

    if(!user) {
      throw new ErrorRequest('Usuário não existe no sistema.')
    }

    await userRepositore.remove(user)

    return []
  }
}
