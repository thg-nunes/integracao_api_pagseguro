import { Column, Entity } from "typeorm";

@Entity('Usuarios')
export class Users {
  @Column('string')
  id: string

  @Column('string')
  nome: string

  @Column('string')
  email: string

  @Column('string')
  senha: string
}
