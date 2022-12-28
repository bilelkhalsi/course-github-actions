import { Schedule, Schedules } from '../model/schedule.model';


export class ScheduleRepository {
    
    private readonly schedules : Schedules;

    constructor(json: string) {
        try {
            this.schedules= JSON.parse(json);
        } catch (ex) {
            this.schedules = {data:[]};
        }
    }

    findBySchedule(schedule: string): Schedule[] {
        return this.schedules.data.filter(item => {
            return item.schedule === schedule;
        });
    }


}