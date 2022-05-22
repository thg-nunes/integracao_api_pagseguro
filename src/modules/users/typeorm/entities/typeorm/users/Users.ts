import { Column, Entity } from "typeorm";

/**
 * Aqui é criada uma entidade para mapear a tabela de usuario, especificando as colunas existentes e o tipo de cada uma
 */
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
