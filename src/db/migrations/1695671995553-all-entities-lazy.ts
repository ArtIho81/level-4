import { MigrationInterface, QueryRunner } from "typeorm";

export class AllEntitiesLazy1695671995553 implements MigrationInterface {
    name = 'AllEntitiesLazy1695671995553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`planets\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`rotation_period\` varchar(255) NOT NULL DEFAULT '', \`orbital_period\` varchar(255) NOT NULL DEFAULT '', \`diameter\` varchar(255) NOT NULL DEFAULT '', \`climate\` varchar(255) NOT NULL DEFAULT '', \`gravity\` varchar(255) NOT NULL DEFAULT '', \`terrain\` varchar(255) NOT NULL DEFAULT '', \`surface_water\` varchar(255) NOT NULL DEFAULT '', \`population\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/planets/', UNIQUE INDEX \`IDX_70a170f032a2ca04a6ec6eb2d9\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`species\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`classification\` varchar(255) NOT NULL DEFAULT '', \`designation\` varchar(255) NOT NULL DEFAULT '', \`average_height\` varchar(255) NOT NULL DEFAULT '', \`skin_colors\` varchar(255) NOT NULL DEFAULT '', \`hair_colors\` varchar(255) NOT NULL DEFAULT '', \`eye_colors\` varchar(255) NOT NULL DEFAULT '', \`average_lifespan\` varchar(255) NOT NULL DEFAULT '', \`language\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/species/', \`homeworldId\` int NULL, UNIQUE INDEX \`IDX_1adf701cac3b2c0f8bacb54774\` (\`name\`), UNIQUE INDEX \`REL_3427f7c92316561d7131c296bc\` (\`homeworldId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`spaceships\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL DEFAULT '', \`manufacturer\` varchar(255) NOT NULL DEFAULT '', \`cost_in_credits\` varchar(255) NOT NULL DEFAULT '', \`length\` varchar(255) NOT NULL DEFAULT '', \`max_atmosphering_speed\` varchar(255) NOT NULL DEFAULT '', \`crew\` varchar(255) NOT NULL DEFAULT '', \`passengers\` varchar(255) NOT NULL DEFAULT '', \`cargo_capacity\` varchar(255) NOT NULL DEFAULT '', \`consumables\` varchar(255) NOT NULL DEFAULT '', \`hyperdrive_rating\` varchar(255) NOT NULL DEFAULT '', \`MGLT\` varchar(255) NOT NULL DEFAULT '', \`starship_class\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/starships/', UNIQUE INDEX \`IDX_3160c0465af56a532d7afa08df\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL DEFAULT '', \`manufacturer\` varchar(255) NOT NULL DEFAULT '', \`cost_in_credits\` varchar(255) NOT NULL DEFAULT '', \`length\` varchar(255) NOT NULL DEFAULT '', \`max_atmosphering_speed\` varchar(255) NOT NULL DEFAULT '', \`crew\` varchar(255) NOT NULL DEFAULT '', \`passengers\` varchar(255) NOT NULL DEFAULT '', \`cargo_capacity\` varchar(255) NOT NULL DEFAULT '', \`consumables\` varchar(255) NOT NULL DEFAULT '', \`vehicle_class\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/vehicles/', UNIQUE INDEX \`IDX_aa397b791341ed3615397050d4\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`images\` (\`id\` int NOT NULL AUTO_INCREMENT, \`path\` varchar(255) NOT NULL, \`peopleId\` int NULL, \`filmsId\` int NULL, \`speciesId\` int NULL, \`planetsId\` int NULL, \`starshipsId\` int NULL, \`vehiclesId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`height\` varchar(255) NOT NULL DEFAULT '', \`mass\` varchar(255) NOT NULL DEFAULT '', \`hair_color\` varchar(255) NOT NULL DEFAULT '', \`skin_color\` varchar(255) NOT NULL DEFAULT '', \`eye_color\` varchar(255) NOT NULL DEFAULT '', \`birth_year\` varchar(255) NOT NULL DEFAULT '', \`gender\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/people/', \`homeworldId\` int NULL, UNIQUE INDEX \`IDX_e7ec00b080e693706a6eaa6d31\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`episode_id\` int NOT NULL DEFAULT '0', \`opening_crawl\` text NOT NULL, \`director\` varchar(255) NOT NULL DEFAULT '', \`producer\` varchar(255) NOT NULL DEFAULT '', \`release_date\` varchar(255) NOT NULL DEFAULT '', \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`url\` varchar(255) NOT NULL DEFAULT 'localhost:3000/films/', UNIQUE INDEX \`IDX_ef6e0245decf772d1dd66f158a\` (\`title\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_films_films\` (\`peopleId\` int NOT NULL, \`filmsId\` int NOT NULL, INDEX \`IDX_be3d4bf0a2a829c091594359de\` (\`peopleId\`), INDEX \`IDX_80ce66926f5e215472c235a3a6\` (\`filmsId\`), PRIMARY KEY (\`peopleId\`, \`filmsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_species_species\` (\`peopleId\` int NOT NULL, \`speciesId\` int NOT NULL, INDEX \`IDX_d6d545e4740ee652e6f79e9ffd\` (\`peopleId\`), INDEX \`IDX_9232984d4ee14342ad97f44382\` (\`speciesId\`), PRIMARY KEY (\`peopleId\`, \`speciesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_vehicles_vehicles\` (\`peopleId\` int NOT NULL, \`vehiclesId\` int NOT NULL, INDEX \`IDX_a7b8cbe95c602d58ade9845ce6\` (\`peopleId\`), INDEX \`IDX_f872d6f9465604601135f41970\` (\`vehiclesId\`), PRIMARY KEY (\`peopleId\`, \`vehiclesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`people_starships_spaceships\` (\`peopleId\` int NOT NULL, \`spaceshipsId\` int NOT NULL, INDEX \`IDX_e12e96481f77e75d06d439fee5\` (\`peopleId\`), INDEX \`IDX_a010e735e86fd0e53204bfb865\` (\`spaceshipsId\`), PRIMARY KEY (\`peopleId\`, \`spaceshipsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films_planets_planets\` (\`filmsId\` int NOT NULL, \`planetsId\` int NOT NULL, INDEX \`IDX_59f34f486757575a016c375061\` (\`filmsId\`), INDEX \`IDX_956e9e10fd96ed618538bb2b96\` (\`planetsId\`), PRIMARY KEY (\`filmsId\`, \`planetsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films_starships_spaceships\` (\`filmsId\` int NOT NULL, \`spaceshipsId\` int NOT NULL, INDEX \`IDX_6d36f8a4e33215c13a8aa2ffb3\` (\`filmsId\`), INDEX \`IDX_f6a323edb0687604567230b5af\` (\`spaceshipsId\`), PRIMARY KEY (\`filmsId\`, \`spaceshipsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films_species_species\` (\`filmsId\` int NOT NULL, \`speciesId\` int NOT NULL, INDEX \`IDX_be1d816ce6bdc4677080067eb4\` (\`filmsId\`), INDEX \`IDX_6042e3f9819bb64e4264509f73\` (\`speciesId\`), PRIMARY KEY (\`filmsId\`, \`speciesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`films_vehicles_vehicles\` (\`filmsId\` int NOT NULL, \`vehiclesId\` int NOT NULL, INDEX \`IDX_21c53d0d80b975c872a4ca4ada\` (\`filmsId\`), INDEX \`IDX_a623eaa88213329f69118cdea5\` (\`vehiclesId\`), PRIMARY KEY (\`filmsId\`, \`vehiclesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`species\` ADD CONSTRAINT \`FK_3427f7c92316561d7131c296bc6\` FOREIGN KEY (\`homeworldId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_7aaee71fd817df85dd0e24d52a6\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_0dc8a31ea91d9fe7574c9c6b48c\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_c02a4e67aceb74f955901a6464a\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_fa13320ccbde4efa91048a55ff4\` FOREIGN KEY (\`planetsId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_53ea6b0269e66436dfe00628f31\` FOREIGN KEY (\`starshipsId\`) REFERENCES \`spaceships\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_0ac1a8463eba3c1ce97f04ac097\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people\` ADD CONSTRAINT \`FK_8f79bb098a482fa585da15ef3a6\` FOREIGN KEY (\`homeworldId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` ADD CONSTRAINT \`FK_be3d4bf0a2a829c091594359de7\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` ADD CONSTRAINT \`FK_80ce66926f5e215472c235a3a61\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` ADD CONSTRAINT \`FK_d6d545e4740ee652e6f79e9ffd5\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` ADD CONSTRAINT \`FK_9232984d4ee14342ad97f443824\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` ADD CONSTRAINT \`FK_a7b8cbe95c602d58ade9845ce63\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` ADD CONSTRAINT \`FK_f872d6f9465604601135f419704\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`people_starships_spaceships\` ADD CONSTRAINT \`FK_e12e96481f77e75d06d439fee55\` FOREIGN KEY (\`peopleId\`) REFERENCES \`people\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`people_starships_spaceships\` ADD CONSTRAINT \`FK_a010e735e86fd0e53204bfb865f\` FOREIGN KEY (\`spaceshipsId\`) REFERENCES \`spaceships\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`films_planets_planets\` ADD CONSTRAINT \`FK_59f34f486757575a016c3750616\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_planets_planets\` ADD CONSTRAINT \`FK_956e9e10fd96ed618538bb2b96c\` FOREIGN KEY (\`planetsId\`) REFERENCES \`planets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`films_starships_spaceships\` ADD CONSTRAINT \`FK_6d36f8a4e33215c13a8aa2ffb36\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_starships_spaceships\` ADD CONSTRAINT \`FK_f6a323edb0687604567230b5af4\` FOREIGN KEY (\`spaceshipsId\`) REFERENCES \`spaceships\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`films_species_species\` ADD CONSTRAINT \`FK_be1d816ce6bdc4677080067eb4b\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_species_species\` ADD CONSTRAINT \`FK_6042e3f9819bb64e4264509f73e\` FOREIGN KEY (\`speciesId\`) REFERENCES \`species\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`films_vehicles_vehicles\` ADD CONSTRAINT \`FK_21c53d0d80b975c872a4ca4ada3\` FOREIGN KEY (\`filmsId\`) REFERENCES \`films\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`films_vehicles_vehicles\` ADD CONSTRAINT \`FK_a623eaa88213329f69118cdea5d\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`films_vehicles_vehicles\` DROP FOREIGN KEY \`FK_a623eaa88213329f69118cdea5d\``);
        await queryRunner.query(`ALTER TABLE \`films_vehicles_vehicles\` DROP FOREIGN KEY \`FK_21c53d0d80b975c872a4ca4ada3\``);
        await queryRunner.query(`ALTER TABLE \`films_species_species\` DROP FOREIGN KEY \`FK_6042e3f9819bb64e4264509f73e\``);
        await queryRunner.query(`ALTER TABLE \`films_species_species\` DROP FOREIGN KEY \`FK_be1d816ce6bdc4677080067eb4b\``);
        await queryRunner.query(`ALTER TABLE \`films_starships_spaceships\` DROP FOREIGN KEY \`FK_f6a323edb0687604567230b5af4\``);
        await queryRunner.query(`ALTER TABLE \`films_starships_spaceships\` DROP FOREIGN KEY \`FK_6d36f8a4e33215c13a8aa2ffb36\``);
        await queryRunner.query(`ALTER TABLE \`films_planets_planets\` DROP FOREIGN KEY \`FK_956e9e10fd96ed618538bb2b96c\``);
        await queryRunner.query(`ALTER TABLE \`films_planets_planets\` DROP FOREIGN KEY \`FK_59f34f486757575a016c3750616\``);
        await queryRunner.query(`ALTER TABLE \`people_starships_spaceships\` DROP FOREIGN KEY \`FK_a010e735e86fd0e53204bfb865f\``);
        await queryRunner.query(`ALTER TABLE \`people_starships_spaceships\` DROP FOREIGN KEY \`FK_e12e96481f77e75d06d439fee55\``);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` DROP FOREIGN KEY \`FK_f872d6f9465604601135f419704\``);
        await queryRunner.query(`ALTER TABLE \`people_vehicles_vehicles\` DROP FOREIGN KEY \`FK_a7b8cbe95c602d58ade9845ce63\``);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` DROP FOREIGN KEY \`FK_9232984d4ee14342ad97f443824\``);
        await queryRunner.query(`ALTER TABLE \`people_species_species\` DROP FOREIGN KEY \`FK_d6d545e4740ee652e6f79e9ffd5\``);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` DROP FOREIGN KEY \`FK_80ce66926f5e215472c235a3a61\``);
        await queryRunner.query(`ALTER TABLE \`people_films_films\` DROP FOREIGN KEY \`FK_be3d4bf0a2a829c091594359de7\``);
        await queryRunner.query(`ALTER TABLE \`people\` DROP FOREIGN KEY \`FK_8f79bb098a482fa585da15ef3a6\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_0ac1a8463eba3c1ce97f04ac097\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_53ea6b0269e66436dfe00628f31\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_fa13320ccbde4efa91048a55ff4\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_c02a4e67aceb74f955901a6464a\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_0dc8a31ea91d9fe7574c9c6b48c\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_7aaee71fd817df85dd0e24d52a6\``);
        await queryRunner.query(`ALTER TABLE \`species\` DROP FOREIGN KEY \`FK_3427f7c92316561d7131c296bc6\``);
        await queryRunner.query(`DROP INDEX \`IDX_a623eaa88213329f69118cdea5\` ON \`films_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_21c53d0d80b975c872a4ca4ada\` ON \`films_vehicles_vehicles\``);
        await queryRunner.query(`DROP TABLE \`films_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_6042e3f9819bb64e4264509f73\` ON \`films_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_be1d816ce6bdc4677080067eb4\` ON \`films_species_species\``);
        await queryRunner.query(`DROP TABLE \`films_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_f6a323edb0687604567230b5af\` ON \`films_starships_spaceships\``);
        await queryRunner.query(`DROP INDEX \`IDX_6d36f8a4e33215c13a8aa2ffb3\` ON \`films_starships_spaceships\``);
        await queryRunner.query(`DROP TABLE \`films_starships_spaceships\``);
        await queryRunner.query(`DROP INDEX \`IDX_956e9e10fd96ed618538bb2b96\` ON \`films_planets_planets\``);
        await queryRunner.query(`DROP INDEX \`IDX_59f34f486757575a016c375061\` ON \`films_planets_planets\``);
        await queryRunner.query(`DROP TABLE \`films_planets_planets\``);
        await queryRunner.query(`DROP INDEX \`IDX_a010e735e86fd0e53204bfb865\` ON \`people_starships_spaceships\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12e96481f77e75d06d439fee5\` ON \`people_starships_spaceships\``);
        await queryRunner.query(`DROP TABLE \`people_starships_spaceships\``);
        await queryRunner.query(`DROP INDEX \`IDX_f872d6f9465604601135f41970\` ON \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_a7b8cbe95c602d58ade9845ce6\` ON \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP TABLE \`people_vehicles_vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_9232984d4ee14342ad97f44382\` ON \`people_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_d6d545e4740ee652e6f79e9ffd\` ON \`people_species_species\``);
        await queryRunner.query(`DROP TABLE \`people_species_species\``);
        await queryRunner.query(`DROP INDEX \`IDX_80ce66926f5e215472c235a3a6\` ON \`people_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_be3d4bf0a2a829c091594359de\` ON \`people_films_films\``);
        await queryRunner.query(`DROP TABLE \`people_films_films\``);
        await queryRunner.query(`DROP INDEX \`IDX_ef6e0245decf772d1dd66f158a\` ON \`films\``);
        await queryRunner.query(`DROP TABLE \`films\``);
        await queryRunner.query(`DROP INDEX \`IDX_e7ec00b080e693706a6eaa6d31\` ON \`people\``);
        await queryRunner.query(`DROP TABLE \`people\``);
        await queryRunner.query(`DROP TABLE \`images\``);
        await queryRunner.query(`DROP INDEX \`IDX_aa397b791341ed3615397050d4\` ON \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`vehicles\``);
        await queryRunner.query(`DROP INDEX \`IDX_3160c0465af56a532d7afa08df\` ON \`spaceships\``);
        await queryRunner.query(`DROP TABLE \`spaceships\``);
        await queryRunner.query(`DROP INDEX \`REL_3427f7c92316561d7131c296bc\` ON \`species\``);
        await queryRunner.query(`DROP INDEX \`IDX_1adf701cac3b2c0f8bacb54774\` ON \`species\``);
        await queryRunner.query(`DROP TABLE \`species\``);
        await queryRunner.query(`DROP INDEX \`IDX_70a170f032a2ca04a6ec6eb2d9\` ON \`planets\``);
        await queryRunner.query(`DROP TABLE \`planets\``);
    }

}
