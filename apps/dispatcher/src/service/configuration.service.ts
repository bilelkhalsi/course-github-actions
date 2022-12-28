import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export enum ConfigKey {
    SCHEDULES_FILE_PATH = 'SCHEDULES_FILE_PATH',
    DISPATCHER_API_URL = 'DISPATCHER_API_URL',
    SONDE_API_URL = 'SONDE_API_URL'
}

@Injectable()
export class ConfigurationService {
    
    constructor(private readonly config: ConfigService){}

    get(key: ConfigKey): string {
        return this.config.get(key);
    }

}