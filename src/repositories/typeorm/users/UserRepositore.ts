import { Repository, EntityRepository } from "typeorm";

import { Users } from "../../../entities/typeorm/users/Users";

/**
 * Aqui crio um repositório que faz o mapeamento da entidade Users e extende do Repository padrao do typeorm. E por fim, crio um método async que vai buscar algo na entidade Users baseado nos parametros.
 *
 * # por estar tudo mapeado corretamente, o typeorm conhece todos os campos existentes na tabala/entidade
 */
@EntityRepository(Users)
export class UserRepositorie extends Repository<Users> {

  async findByNameAndEmail(nome: string, email: string): Promise<Users | undefined> {
    const nameAndEmailExist = this.findOne({
      where: {
        nome,
        email,
      }
    })

    return nameAndEmailExist
  }
}
