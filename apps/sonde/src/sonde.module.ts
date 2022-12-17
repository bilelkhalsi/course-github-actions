import { Module } from '@nestjs/common';
import { SondeController } from './sonde.controller';
import { SondeService } from './sonde.service';

@Module({
  imports: [],
  controllers: [SondeController],
  providers: [SondeService],
})
export class SondeModule {}
