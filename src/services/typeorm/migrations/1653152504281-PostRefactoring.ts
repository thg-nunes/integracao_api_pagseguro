import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PostRefactoring1653152504281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'Usuarios',
        columns: [
          {
            name: 'id',
            type: 'varchar(18)',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar'
          },
          {
            name: 'email',
            type: 'varchar'
          },
          {
            name: 'senha',
            type: 'varchar'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('Usuarios')
    }

}
