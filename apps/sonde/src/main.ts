import { NestFactory } from '@nestjs/core';
import { SondeModule } from './sonde.module';

async function bootstrap() {
  const app = await NestFactory.create(SondeModule);
  await app.listen(3000);
}
bootstrap();
