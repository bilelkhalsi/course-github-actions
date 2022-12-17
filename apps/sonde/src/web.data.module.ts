import { Module } from '@nestjs/common';
import puppeteer, { PuppeteerNode } from 'puppeteer';
import { WebDataController } from './api/web.data.controller';
import { WebDataRepository } from './data/repositories/web.data.repository';
import { WebDataService } from './service/web.data.service';

@Module({
  imports: [],
  controllers: [WebDataController],
  providers: [
    WebDataRepository,
    WebDataService,
  {
    provide: PuppeteerNode,
    useValue: puppeteer
  }
  ],
})
export class WebDataModule {}
