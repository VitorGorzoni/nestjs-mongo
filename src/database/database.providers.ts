
import * as mongoose from 'mongoose';
import { Mongo } from '../config/mongo';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb://${Mongo.host}/${Mongo.path}`, { useNewUrlParser: true }),
  },
];