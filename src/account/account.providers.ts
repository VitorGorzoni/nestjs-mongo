
import { Connection } from 'mongoose';
import { AccountSchema } from './schema/account.schema';

export const accountProviders = [
  {
    provide: 'ACCOUNT_MODEL',
    useFactory: (connection: Connection) => connection.model('account', AccountSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];