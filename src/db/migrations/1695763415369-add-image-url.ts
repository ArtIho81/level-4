import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImageUrl1695763415369 implements MigrationInterface {
    name = 'AddImageUrl1695763415369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`images\` ADD \`url\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`images\` DROP COLUMN \`url\``);
    }

}
