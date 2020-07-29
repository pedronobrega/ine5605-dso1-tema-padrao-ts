import {MigrationInterface, QueryRunner} from "typeorm";

export class NullableColumns1595989071123 implements MigrationInterface {
    name = 'nullableColumns1595989071123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_48dad71406fb5916657b8fd740` ON `keys`");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `devolution_date` `devolution_date` datetime NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `reason` `reason` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `requests` CHANGE `reason` `reason` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `devolution_date` `devolution_date` datetime NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_48dad71406fb5916657b8fd740` ON `keys` (`car_id`)");
    }

}
