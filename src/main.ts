
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { getDbConnectionOptions } from '@shared/utils';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(await getDbConnectionOptions(process.env.name)),
    {
      // logger: Boolean(process.env.ENABLELOGGING),
      logger: console,
    });
  app.enableCors();
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     /**
  //      * Strip away all none-object existing properties
  //      */
  //     whitelist: true,
  //     /***
  //      * Transform input objects to their corresponding DTO objects
  //      */
  //     transform: true,
  //   }),
  // );

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  Logger.log(`Server already alive!`, 'Bootstrap');
}
bootstrap();
