import { Test, TestingModule } from '@nestjs/testing';
import { WebDataRepository } from '../data/repositories/web.data.repository';
import { WebDataService } from '../service/web.data.service';
import { WebDataController } from './web.data.controller';

describe('SondeController', () => {
  let sondeController: WebDataController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebDataController],
      providers: [WebDataRepository, WebDataService],
    }).compile();

    sondeController = app.get<WebDataController>(WebDataController);
  });


});
