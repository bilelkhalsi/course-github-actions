import { Injectable } from "@nestjs/common";
import { forkJoin, map, Observable, of } from "rxjs";
import { Schedule, SchedulesResult } from "../data/model/schedule.model";
import { ScheduleRepository } from "../data/repositories/schedule.repository";
import { WebDataClient } from "../data/repositories/web.data.client";

@Injectable()
export class ScheduleService {

    constructor(private readonly scheduleRepository: ScheduleRepository,
        private readonly webData: WebDataClient){}

    schedule(schedule: string): Observable<SchedulesResult> {
        const schedules =  this.scheduleRepository.findBySchedule(schedule);
        if (schedules && schedules.length) {
            return forkJoin(schedules.map(item => this.dispatch(item))).pipe(
                map(values => {
                    return {
                        res: []
                    };
                })
            );
        }
        return of({
            res: []
        });
    }

    private dispatch(schedule :  Schedule): Observable<any> {
        return this.webData.selectOne(schedule.source, schedule.selector, schedule.schedule);
    }
    
}