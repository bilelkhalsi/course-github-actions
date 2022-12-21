import { Injectable } from "@nestjs/common";
import { SchedulesResult } from "../data/model/schedule.model";

@Injectable()
export class ScheduleService {

    schedule(schedule: string): SchedulesResult {
        return null;
    }
    
}