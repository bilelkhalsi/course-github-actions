import { Test, TestingModule } from '@nestjs/testing';
import { SondeController } from './sonde.controller';
import { SondeService } from './sonde.service';

describe('SondeController', () => {
  let sondeController: SondeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SondeController],
      providers: [SondeService],
    }).compile();

    sondeController = app.get<SondeController>(SondeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sondeController.getHello()).toBe('Hello World!');
    });
  });
});
