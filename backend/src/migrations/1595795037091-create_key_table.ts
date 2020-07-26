import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateKeyTable1595795037091 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'keys',
            columns: [
                {
                    name: 'id', 
                    type: 'integer', 
                    isPrimary: true,
                    generationStrategy: 'increment'
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
                    default: 'now()',
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('keys')
    }

}
