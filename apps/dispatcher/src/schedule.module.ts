import { Module } from '@nestjs/common';
import { ScheduleController } from './api/schedule.controller';
import { WebDataClient } from './data/repositories/web.data.client';
import { ScheduleService } from './service/schedule.service';

@Module({
  imports: [],
  controllers: [ScheduleController],
  providers: [WebDataClient, ScheduleService],
})
export class ScheduleModule {}
