import { Injectable, NotFoundException } from '@nestjs/common';
import { Films } from './films.entity';
import { CreateFilmsDTO } from './dto/create-films.dto';
import { People } from 'src/people/people.entity';
import { dataSource } from '@src/db/data-source';
import {
  E_Director,
  E_Films,
  E_OpeningCrawl,
  E_Producer,
  E_ReleaseDate,
} from './films.enums';
import { UtilsService } from '@src/utils/utils.service';
import { updateFilmsDTO } from './dto/updata-films.dto';
import { FilmsResponse } from '@src/utils/types';
import { ImagesService } from '@src/images/images.service';

@Injectable()
export class FilmsService {
  constructor(
    private readonly utilsService: UtilsService,
    private readonly imagesService: ImagesService,
  ) {}

  async getAllFilms(): Promise<FilmsResponse[]> {
    const films = await dataSource.getRepository(Films).find();
    return await Promise.all(
      films.map(
        async (film) => await this.utilsService.makeRelatedEntityResponse(film),
      ),
    );
  }

  async getFilmById(id: number): Promise<FilmsResponse> {
    const film = await dataSource.getRepository(Films).findOneBy({ id });
    return await this.utilsService.makeRelatedEntityResponse(film);
  }

  private getEpisodeId(title: string): number {
    for (let i = 1; i <= 6; i++) {
      if (E_Films[`Episode${i}`] === title) {
        return i;
      }
    }
  }

  private fillEnumProperties(film: Films) {
    const enumProps = [
      { name: 'director', type: E_Director },
      { name: 'producer', type: E_Producer },
      { name: 'openingCrawl', type: E_OpeningCrawl },
      { name: 'releseDate', type: E_ReleaseDate },
    ];
    for (let prop of enumProps) {
      film[prop.name] = prop.type[`Episode${film.episode_id}`];
    }
  }

  async addFilm(dto: CreateFilmsDTO) {
    let film = new Films();
    film = await this.utilsService.createEntityInstance(film, dto);
    return await dataSource.manager.save(film);
  }

  async updateFilm(id: number, dto: updateFilmsDTO) {
    let film = await dataSource.getRepository(Films).findOneBy({ id });
    if(!film) {
      throw new NotFoundException()
    }
    film = await this.utilsService.createEntityInstance(film, dto)
    return await dataSource.manager.save(film);
  }

  async deleteFilm(id: number) {
    let film = await dataSource.manager.findOneBy(Films, { id });
    if(!film) {
      throw new NotFoundException()
    }
    film = await this.utilsService.clearProps(film);
    await dataSource.manager.save(film);
    return await dataSource.manager.remove(film);
  }

  async addImageForFilm(id: number, image: Express.Multer.File) {
    return await this.imagesService.addImageForEntity(id, image, Films);
  }
}
