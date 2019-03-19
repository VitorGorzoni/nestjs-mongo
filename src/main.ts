import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'src/config/server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Server.port);
}
bootstrap();
