import { getCustomRepository } from 'typeorm'
import { ErrorRequest } from '../../../error/http'
import { User } from '../interfaces'

import { UserRepositorie } from '../typeorm/repositories/UserRepositore'
import { EncryptPassword } from './EncryptPassword'

export class CreateUser {
  async execute({nome, email, senha}: User) {
    // pegar o repositorio o qual quero usar
    const userRepositorie = getCustomRepository(UserRepositorie)
    senha = await new EncryptPassword().encryptPassword(senha)

    // com o repository mapeado, tenho acesso ao metodo que criei ou metodos padrao
    const nameAndEmailExists = await userRepositorie.findByNameAndEmail(nome, email)

    if(nameAndEmailExists) {
      throw new ErrorRequest('Nome ou email já cadastrados, tente outro.')
    }

    // como o UserRepositorie esta baseado na entity Users(que mapea toda a entidade user da base de dados), logo tenho acesso a todas as propriedade da entity user, e aqui somente é criado um obj, e nao feita a inserção
    const createUser = userRepositorie.create({
      nome,
      email,
      senha
    })

    // com o metodo save do repositorio invocado, é salvo um dado na base se dados, entao aqui devo usar o await
    await userRepositorie.save(createUser)

    return createUser
  }
}
