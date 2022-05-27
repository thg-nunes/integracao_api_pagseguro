import { Column, Entity, PrimaryColumn } from "typeorm";

/**
 * Aqui é criada uma entidade para mapear a tabela de usuario, especificando as colunas existentes e o tipo de cada uma
 */
@Entity('Usuarios')
export class Users {
  @PrimaryColumn()
  id: string

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  senha: string
}
