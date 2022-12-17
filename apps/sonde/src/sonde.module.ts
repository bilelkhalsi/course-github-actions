import { Module } from '@nestjs/common';
import { WebDataModule } from './web.data.module';

@Module({
  imports: [WebDataModule],
  providers: [],
})
export class SondeModule {}
