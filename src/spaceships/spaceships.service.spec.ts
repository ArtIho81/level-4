import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsService } from './spaceships.service';

describe('SpaceshipsService', () => {
  let service: SpaceshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceshipsService],
    }).compile();

    service = module.get<SpaceshipsService>(SpaceshipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
