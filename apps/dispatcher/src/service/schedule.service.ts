import { Injectable } from "@nestjs/common";
import { SchedulesResult } from "../data/model/schedule.model";
import { ScheduleRepository } from "../data/repositories/schedule.repository";

@Injectable()
export class ScheduleService {

    constructor(private readonly scheduleRepository: ScheduleRepository){}

    schedule(schedule: string): SchedulesResult {
        const schedules =  this.scheduleRepository.findBySchedule(schedule);
        return null;
    }
    
}