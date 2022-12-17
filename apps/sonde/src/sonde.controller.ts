import { Controller, Get } from '@nestjs/common';
import { SondeService } from './sonde.service';

@Controller()
export class SondeController {
  constructor(private readonly sondeService: SondeService) {}

  @Get()
  getHello(): string {
    return this.sondeService.getHello();
  }
}
