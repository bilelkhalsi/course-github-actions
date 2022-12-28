import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { catchError, map, of } from "rxjs";
import { ConfigKey, ConfigurationService } from "../../service/configuration.service";


@Injectable()
export class WebDataClient { 

    constructor(private readonly http: HttpService,
        private readonly config: ConfigurationService){}

    selectOne(source: string, selector: string, schedule: string) {
        const url = this.config.get(ConfigKey.SONDE_API_URL) + '/one';
        return this.http.post(url, {
            source, 
            selector,
            schedule
        }).pipe(
            map(res => res.data),
            catchError(error => {
                Logger.error( 'Technical erro to reach endpoint', error);
                return of({
                    source,
                    selector,
                    timestamp: new Date(),
                    value : '',
                    error: 'Technical erro to reach endpoint'
                });
        })
        );
    }

}