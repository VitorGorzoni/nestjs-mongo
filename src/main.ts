import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Server } from 'src/config/server';
import { AccountModule } from './account/account.module';
import { AccountEndpoint } from './account/view/AccountEndpoint';

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

  await app.listen(Server.port);
}
bootstrap();
