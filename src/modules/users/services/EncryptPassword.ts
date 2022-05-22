import bcrypt from "bcrypt"

export class EncryptPassword {
  private _password: string = ''

  constructor() {}

  encryptPassword(senha: string | number): string {
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
