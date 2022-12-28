import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";

export enum Sonde {
    WEB = 'web',
}

export class Schedule {
    @ApiProperty({
        description: 'Sonde type',
        enum: ['web']
    })
    sonde : Sonde;
    @ApiProperty({
        description: 'Data source',
        example: 'www.google.com'
    })
    source : string;
    @ApiProperty({
        description: 'Data selector',
        example: 'body > #search > #count'
    })
    selector : string;
    @ApiProperty({
        description: 'Select multiple values',
        example: 'false'
    })
    multiple : boolean = false;
    @ApiProperty({
        description: 'Scheduling cron',
        example: '0 */8 * * *'
    })
    schedule : string;
}

export class Schedules {
    data: Schedule[];
}

export class ScheduleFailure extends Schedule {
    @ApiProperty({
        description: 'Schedule execution timestamp'
    })
    timestamp: Date;
    @ApiProperty({
        description: 'Schedule execution error'
    })
    error: string;
}

export class ScheduleSuccess extends Schedule {
    @ApiProperty({
        description: 'Schedule execution timestamp'
    })
    timestamp: Date;
}


@ApiExtraModels(ScheduleSuccess)
@ApiExtraModels(ScheduleFailure)
export class SchedulesResult {

    @ApiProperty({
        description: 'Schedule execution result',
        type: 'array',
        items: {
            oneOf: [
                { $ref: getSchemaPath(ScheduleSuccess) },
                { $ref: getSchemaPath(ScheduleFailure) },
            ]
        },
      })
    res: Array<ScheduleSuccess | ScheduleFailure>;
}

