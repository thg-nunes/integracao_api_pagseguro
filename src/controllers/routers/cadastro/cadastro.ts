import { Request, Response } from "express"
import { AnalyzeData } from "./protocol"
import { CreateDataBaseConnection } from "../../../services/database/connectionDataBase"
import { QueryError, RowDataPacket } from "mysql2"
import uniqueID from 'uniqid'
import { AnalyzePassword } from "./dependences/analyze-password"

type DataCadastro = {
  nome: string,
  email: string,
  senha: string | number
}

export class Cadastro {
  private _password: string | number = ''
  private readonly analyzePassword: AnalyzePassword = new AnalyzePassword()

  constructor() {}

  insertData(req: Request, res: Response):void {
    let { nome, email, senha }: DataCadastro = req.body
    senha = this.analyzePassword.analyzePassword(senha)
    const generateId = uniqueID()

    CreateDataBaseConnection.connection.query(`insert into usuarios (id, nome, email, senha) values ('${generateId}', '${nome}', '${email}', '${senha}')`, (err: QueryError, result: RowDataPacket) => {
      console.log(err, result)
    })
    res.send('chegou lá')
  }
}

