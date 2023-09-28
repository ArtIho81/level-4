import { Type } from '@nestjs/common';
import { People } from '@src/people/people.entity';
import { dataSource } from './data-source';
import { Films } from '@src/films/films.entity';
import { Planets } from '@src/planets/planets.entity';
import { Species } from '@src/species/species.entity';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';
import { AllEntities } from '@src/utils/types';

const url = 'https://swapi.dev/api/';
const allEntitiesNames = [
  'people',
  'films',
  'planets',
  'species',
  'starships',
  'vehicles',
];
const relatedProps = allEntitiesNames.concat([
  'residents',
  'pilots',
  'characters',
  'homeworld',
]);

function createEntityUrl(entityName: string): string {
  return url + entityName;
}

async function getAllEntityInstances(entityName: string) {
  const entityUrl = createEntityUrl(entityName);
  const entityInstances = [];
  const getEntityInstances = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    entityInstances.push(...data.results);
    return data.next;
  };
  let next = await getEntityInstances(entityUrl);
  while (next !== null) {
    next = await getEntityInstances(next);
  }
  return entityInstances;
}

function getEntityEmptyInstance(entityName: string) {
  switch (entityName) {
    case 'people':
      return new People();
    case 'films':
      return new Films();
    case 'planets':
      return new Planets();
    case 'species':
      return new Species();
    case 'starships':
      return new Spaceships();
    case 'vehicles':
      return new Vehicles();
    default:
  }
}

async function getInstanceName(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data.name || data.title)
    .catch(e => console.log(e));
}

async function saveInstancesWithoutRelation(
  entityInstances,
  entityName: string,
) {
  const deleteProperty = (obj) => {
    delete obj.created;
    delete obj.edited;
    delete obj.url;
  };
  const clearRelations = (item) => {
    for (const relatedProp of relatedProps) {
      if (item[relatedProp] === undefined) {
        continue;
      }
      deleteProperty(item);
      const isString = typeof item[relatedProp] === 'string';
      item[relatedProp] = isString ? null : [];
    }
    return item;
  };
  return await Promise.all(
    entityInstances.map(async (item) => {
      item = clearRelations(item);
      await dataSource.manager.save(
        Object.assign(getEntityEmptyInstance(entityName), item),
      );
    }),
  );
}

async function getRelatedEntities<AllEntities>(
  prop: string[],
  entity: Type<AllEntities>,
) {
  const whereConditions = {};
  const field = entity === Films ? 'title' : 'name';
  return await Promise.all(
    prop.map(async (link: string): Promise<AllEntities> => {
      whereConditions[field] = await getInstanceName(link);
      return await dataSource.manager.findOneBy(entity, whereConditions);
    }),
  );
}

async function addRelationsToPeople() {
  const people = await getAllEntityInstances('people');
  for (const person of people) {
    const savePerson = await dataSource.manager.findOneBy(People, {
      name: person.name,
    });
    savePerson.films = Promise.resolve(await getRelatedEntities(person.films, Films));
    savePerson.species = Promise.resolve(
      await getRelatedEntities(person.species, Species),
    );
    savePerson.starships = Promise.resolve(
      await getRelatedEntities(person.starships, Spaceships),
    );
    savePerson.vehicles = Promise.resolve(
      await getRelatedEntities(person.vehicles, Vehicles),
    );
    savePerson.homeworld =
      person.homeworld === null
        ? null
        : Promise.resolve(
            (await getRelatedEntities([person.homeworld], Planets))[0],
          );
    await dataSource.manager.save(savePerson);
  }
}
async function addRelationsToFilms() {
  const films = await getAllEntityInstances('films');
  for (const film of films) {
    const saveFilm = await dataSource.manager.findOneBy(Films, {
      title: film.title,
    });
    saveFilm.species = Promise.resolve(
      await getRelatedEntities(film.species, Species),
    );
    saveFilm.starships = Promise.resolve(
      await getRelatedEntities(film.starships, Spaceships),
    );
    saveFilm.vehicles = Promise.resolve(
      await getRelatedEntities(film.vehicles, Vehicles),
    );
    saveFilm.planets = Promise.resolve(
      await getRelatedEntities(film.planets, Planets),
    );
    await dataSource.manager.save(saveFilm);
  }
}

async function addRelationsToSpecies() {
  const species = await getAllEntityInstances('species');
  for (const race of species) {
    const saveRace = await dataSource.manager.findOneBy(Species, {
      name: race.name,
    });
    saveRace.homeworld =
      race.homeworld === null
        ? null
        : Promise.resolve((await getRelatedEntities([race.homeworld], Planets))[0]);
    await dataSource.manager.save(saveRace);
  }
}

async function seed() {
  for (const entityName of allEntitiesNames) {
    const entityInstances = await getAllEntityInstances(entityName);
    await saveInstancesWithoutRelation(entityInstances, entityName);
  }
  await addRelationsToPeople();
  await addRelationsToFilms();
  await addRelationsToSpecies();
  console.log('ok');
  process.exit(0)
}

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        seed();
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
