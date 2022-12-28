import { HttpModule } from '@nestjs/axios';
import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as fs from 'fs/promises';
import { ScheduleController } from './api/schedule.controller';
import { ScheduleRepository } from './data/repositories/schedule.repository';
import { WebDataClient } from './data/repositories/web.data.client';
import { ConfigKey, ConfigurationService } from './service/configuration.service';
import { ScheduleService } from './service/schedule.service';

function scheduleRepositoryFactory(configService: ConfigurationService): Promise<ScheduleRepository>{
  return fs.readFile(configService.get(ConfigKey.SCHEDULES_FILE_PATH), 'utf8').then(raw => {
    Logger.debug('Loading schedules json file :', raw);
    return new ScheduleRepository(raw);
  }).catch(error=>{
    return new ScheduleRepository('{"data":[]}');
  })
}

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [ScheduleController],
  providers: [
    WebDataClient,
    ScheduleService,
    ConfigurationService,
    {
      provide: ScheduleRepository,
      useFactory: scheduleRepositoryFactory,
      inject: [ConfigurationService]
    }
],
})
export class ScheduleModule {}
