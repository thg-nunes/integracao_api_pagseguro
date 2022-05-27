import bcrypt from "bcrypt"

export class Password {
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

  comparePassword(senha: string | number, senhaSalva: string): boolean {
    senha = senha.toString()

    const passwordIsCorrect = bcrypt.compareSync(senha, senhaSalva)

    return passwordIsCorrect
  }
}
