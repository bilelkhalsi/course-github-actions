import { Test, TestingModule } from '@nestjs/testing';
import puppeteer, { PuppeteerNode } from 'puppeteer';
import { WebDataRepository } from '../data/repositories/web.data.repository';
import { WebDataService } from '../service/web.data.service';
import { WebDataController } from './web.data.controller';


describe('SondeController', () => {
  let sondeController: WebDataController;
  let webDataRepository : WebDataRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebDataController],
      providers: [
        WebDataRepository, 
        WebDataService,
        {
          provide: PuppeteerNode,
          useValue: puppeteer
        }
      ],
    }).compile();
    sondeController = app.get<WebDataController>(WebDataController);
    webDataRepository = app.get<WebDataRepository>(WebDataRepository);

    jest.spyOn(webDataRepository, 'selectOne').mockImplementation((selector) => Promise.resolve({
      source: selector.source,
      selector: selector.selector,
      timestamp: new Date(),
      value: '100'
    }));

    jest.spyOn(webDataRepository, 'selectAll').mockImplementation((selector) => Promise.resolve({
      source: selector.source,
      selector: selector.selector,
      timestamp: new Date(),
      value: ['100', '99']
    }));

  });

  it('should return the value extracted from the web page',  (done) => {

    sondeController.selectOne({
      source: 'www.google.com',
      selector: 'body>search>count',
      schedule: '0 0 */2 * *'
    }).subscribe(res => {
      expect(res).toMatchObject({
        value: '100'
      });
      done();
    });
  });

  
  it('should return multiple values extracted from the web page',  (done) => {

    sondeController.selectAll({
      source: 'www.google.com',
      selector: 'body>search>count',
      schedule: '0 0 */2 * *'
    }).subscribe(res => {
      expect(res).toMatchObject({
        value: ['100', '99']
      });
      done();
    });
  });


});
