import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePeopleImagesEntity1694000190861 implements MigrationInterface {
    name = 'CreatePeopleImagesEntity1694000190861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`people_images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`path\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`people_images\``);
    }

}
