import { MigrationInterface, QueryRunner } from "typeorm";

export class OneToManyPeoleImages1694000372042 implements MigrationInterface {
    name = 'OneToManyPeoleImages1694000372042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`people_images\` ADD \`peopleId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`people_images\` ADD CONSTRAINT \`FK_b77fd6b6f01dc7456a9cb9f097d\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`people_images\` DROP FOREIGN KEY \`FK_b77fd6b6f01dc7456a9cb9f097d\``);
        await queryRunner.query(`ALTER TABLE \`people_images\` DROP COLUMN \`peopleId\``);
    }

}
