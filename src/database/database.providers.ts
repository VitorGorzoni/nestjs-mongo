
import * as mongoose from 'mongoose';

const dotenv = require('dotenv');
dotenv.config();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`${process.env.MONGODB_URL}`, { useNewUrlParser: true }),
  },
];