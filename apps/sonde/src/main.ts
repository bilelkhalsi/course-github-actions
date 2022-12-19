import { NestFactory } from '@nestjs/core';
import { SondeModule } from './sonde.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(SondeModule);
  const config = new DocumentBuilder()
    .setTitle('Sond is an API that allow you to extract one or multiple values from a source (Public Web page...)')
    .setDescription('The API requires a complete source description and a specific value selector')
    .setVersion('1.0')
    .addTag('Web')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();


