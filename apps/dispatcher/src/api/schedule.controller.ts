import { Controller, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SchedulesResult } from '../data/model/schedule.model';
import { ScheduleService } from '../service/schedule.service';

@ApiTags('Job')
@Controller('/job')
export class ScheduleController {

  constructor(private readonly scheduleService: ScheduleService) {}

  @ApiResponse({
    status: 200,
    type: SchedulesResult
  })
  @Post('/schedule')
  schedule(@Query('schedule') schedule: string): SchedulesResult {
    return this.scheduleService.schedule(schedule);
  }

}
