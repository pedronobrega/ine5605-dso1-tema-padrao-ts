import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations1595983025368 implements MigrationInterface {
    name = 'relations1595983025368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `requests` ADD `user_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `requests` ADD `key_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `keys` ADD `car_id` int NULL");
        await queryRunner.query("ALTER TABLE `keys` ADD UNIQUE INDEX `IDX_48dad71406fb5916657b8fd740` (`car_id`)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `devolution_date` `devolution_date` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `accepted` `accepted` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `year` `year` int UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `cars` DROP COLUMN `kilometer`");
        await queryRunner.query("ALTER TABLE `cars` ADD `kilometer` int UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `tier` `tier` int UNSIGNED NOT NULL");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `deleted_at` `deleted_at` datetime(6) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_48dad71406fb5916657b8fd740` ON `keys` (`car_id`)");
        await queryRunner.query("ALTER TABLE `requests` ADD CONSTRAINT `FK_9e5e2eb56e3837b43e5a547be23` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `requests` ADD CONSTRAINT `FK_929e681b7c53b150b318c7c9ca8` FOREIGN KEY (`key_id`) REFERENCES `keys`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `keys` ADD CONSTRAINT `FK_48dad71406fb5916657b8fd740e` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `keys` DROP FOREIGN KEY `FK_48dad71406fb5916657b8fd740e`");
        await queryRunner.query("ALTER TABLE `requests` DROP FOREIGN KEY `FK_929e681b7c53b150b318c7c9ca8`");
        await queryRunner.query("ALTER TABLE `requests` DROP FOREIGN KEY `FK_9e5e2eb56e3837b43e5a547be23`");
        await queryRunner.query("DROP INDEX `REL_48dad71406fb5916657b8fd740` ON `keys`");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `deleted_at` `deleted_at` datetime(0) NULL");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `updated_at` `updated_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `created_at` `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `tier` `tier` int NOT NULL");
        await queryRunner.query("ALTER TABLE `cars` DROP COLUMN `kilometer`");
        await queryRunner.query("ALTER TABLE `cars` ADD `kilometer` float NOT NULL");
        await queryRunner.query("ALTER TABLE `cars` CHANGE `year` `year` int NOT NULL");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `deleted_at` `deleted_at` datetime(0) NULL");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `updated_at` `updated_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `keys` CHANGE `created_at` `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `deleted_at` `deleted_at` datetime(0) NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `updated_at` `updated_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `created_at` `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `accepted` `accepted` tinyint(1) NOT NULL");
        await queryRunner.query("ALTER TABLE `requests` CHANGE `devolution_date` `devolution_date` datetime NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `deleted_at` `deleted_at` datetime(0) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `updated_at` `updated_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` CHANGE `created_at` `created_at` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `keys` DROP INDEX `IDX_48dad71406fb5916657b8fd740`");
        await queryRunner.query("ALTER TABLE `keys` DROP COLUMN `car_id`");
        await queryRunner.query("ALTER TABLE `requests` DROP COLUMN `key_id`");
        await queryRunner.query("ALTER TABLE `requests` DROP COLUMN `user_id`");
    }

}
