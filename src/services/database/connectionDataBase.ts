import mysql2, { Connection } from 'mysql2'
import 'dotenv/config'

/**
 * Essa classe foi criada usando o padrao de projeto SINGLETON, onde é criado um único ponto de acesso a uma classe para toda a aplicação.   Essa ideia foi implementada por se tratar de uma classe que faz conexão com o banco de dados, e com esse padrão, é criada uma única conexão com a base de dados que serve para toda a aplicação, evitando assim uma sobrecarga desnecessária para o banco.
 * Além disso, usei variáveis de ambiente para proporcionar maior segurança a aplicação, não deixando visível senha, usuário ou host da base de dados.
 */

export class CreateDataBaseConnection {
  private static _conection: Connection | null = null

  private constructor () {}

  static get connection(): Connection {
    if(CreateDataBaseConnection._conection === null) {
      CreateDataBaseConnection._conection = mysql2.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      })
      return CreateDataBaseConnection._conection
    }
    return CreateDataBaseConnection._conection
  }
}
