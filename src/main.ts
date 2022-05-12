import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      transform: true,
      skipNullProperties: true,
      skipMissingProperties: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Diagnosticus Action - API Rest')
    .setDescription('if this is not the prettiest API ever, I am a fridge')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000, async () => {
    console.log(`Application is running on: ${await app.getUrl()}`);
  });
}

bootstrap();
