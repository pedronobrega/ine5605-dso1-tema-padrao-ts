import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1595795478903 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id', 
                    type: 'integer', 
                    isPrimary: true,
                    generationStrategy: 'increment',
                    isGenerated: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'birthdate',
                    type: 'datetime'
                },
                {
                    name: 'role',
                    type: 'varchar'
                },
                {
                    name: 'phone',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                    isNullable: true
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                    isNullable: true
                },
                {
                    name: 'deleted_at',
                    type: 'datetime',
                    default: null,
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('users')
    }

}
