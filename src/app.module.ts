import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { Mongo } from './config/mongo';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${Mongo.host}:${Mongo.port}/${Mongo.path}`,
    {
      useNewUrlParser: true
    }),
    AccountModule],
})
export class AppModule { }
