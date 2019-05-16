import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AccountModule } from './account/account.module';

const dotenv = require('dotenv');
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Accounts')
    .setDescription('The Accounts API description')
    .setVersion('1.0')
    .addTag('accounts')
    .build();

  const accountDocument = SwaggerModule.createDocument(app, options, {
    include: [AccountModule],
  });
  SwaggerModule.setup('api/accounts', app, accountDocument);

  await app.listen(process.env.PORT);
}
bootstrap();
