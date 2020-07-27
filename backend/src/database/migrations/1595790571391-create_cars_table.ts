import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCarsTable1595790571391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'cars',
                columns: [
                    {
                        name: 'id', 
                        type: 'integer', 
                        isPrimary: true,
                        generationStrategy: 'increment',
                        isGenerated: true
                    },
                    {
                        name: 'plate',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'brand',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'year',
                        type: 'integer',
                        isNullable: false
                    },
                    {
                        name: 'kilometer',
                        type: 'float',
                        isNullable: false
                    },
                    {
                        name: 'tier',
                        type: 'integer',
                        isNullable: false
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('cars')
    }

}
