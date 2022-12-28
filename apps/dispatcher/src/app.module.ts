import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from './schedule.module';

@Module({
  imports: [ScheduleModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
