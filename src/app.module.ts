import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { Mongo } from './config/mongo';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${Mongo.host}:${Mongo.port}/${Mongo.port}`,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }),
    AccountModule]
})
export class AppModule { }
