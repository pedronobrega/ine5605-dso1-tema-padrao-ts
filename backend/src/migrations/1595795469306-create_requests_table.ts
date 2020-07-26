import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRequestsTable1595795469306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'requests',
            columns: [
                {
                    name: 'id', 
                    type: 'integer', 
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'devolution_date',
                    type: 'datetime',
                    isNullable: true
                },
                {
                    name: 'accepted',
                    type: 'bool'
                },
                {
                    name: 'reason',
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
                    default: 'now()',
                    isNullable: true
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('requests')
    }

}
