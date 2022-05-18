import { AnalyzeData } from "../protocol"
import bcrypt from "bcrypt"

export class AnalyzePassword implements AnalyzeData {
  private _password: string | number = ''

  constructor() {}

  analyzePassword(senha: string | number): string | number {
    if (typeof senha === 'number') {
      const passedToString = senha.toString()
      const passwordEncrypted = bcrypt.hashSync(passedToString, 5)
      senha = passwordEncrypted
      this._password = senha
    }

    this._password = bcrypt.hashSync(senha, 14)
    return this._password
  }
}
