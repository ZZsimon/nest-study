import { Test, TestingModule } from '@nestjs/testing';
import { M1Controller } from './m1.controller';

describe('M1Controller', () => {
  let controller: M1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [M1Controller],
    }).compile();

    controller = module.get<M1Controller>(M1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
