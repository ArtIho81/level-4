import { Films } from '@src/films/films.entity';
import { People } from '@src/people/people.entity';
import { E_PeopleGender } from '@src/people/people.enums';
import { Planets } from '@src/planets/planets.entity';
import { Spaceships } from '@src/spaceships/spaceships.entity';
import { Species } from '@src/species/species.entity';
import { Vehicles } from '@src/vehicles/vehicles.entity';

export type AllEntities =
  | People
  | Films
  | Species
  | Spaceships
  | Vehicles
  | Planets;

export type AllResponses =
  | PeopleResponse
  | FilmsResponse
  | PlanetsResponse
  | SpaceshipsResponse
  | SpeciesResponse
  | VehiclesResponse;

type T_Response = {
  id: number;
  url: string;
  createdAt: string;
  updatedAt: string;
};

type PeopleSpecies = T_Response & {
  name: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  films: string[];
};

export type PeopleResponse = PeopleSpecies & {
  height: string;
  mass: string;
  birth_year: string;
  gender: E_PeopleGender;
  species: string[];
  starships: string[];
  vehicles: string[];
};
export type SpeciesResponse = PeopleSpecies & {
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  language: string;
  people: string[];
};

export type FilmsResponse = T_Response & {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
};

export type PlanetsResponse = T_Response & {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
};

type ShipsResponse = T_Response & {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  pilots: string[];
  films: string[];
};

export type SpaceshipsResponse = ShipsResponse & {
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
};

export type VehiclesResponse = ShipsResponse & {
  vehicle_class: string;
};