import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsController } from './spaceships.controller';

describe('SpaceshipsController', () => {
  let controller: SpaceshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceshipsController],
    }).compile();

    controller = module.get<SpaceshipsController>(SpaceshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
