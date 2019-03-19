import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountService } from './application/impl/AccountService';
import { AccountRepository } from './infrastructure/AccountRepository';
import { AccountEndpoint } from './view/AccountEndpoint';
import { AccountSchema } from './schema/account.schema';

@Module({
    imports: [CacheModule.register(), MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }])],
    controllers: [AccountEndpoint],
    providers: [AccountService, AccountRepository],
})
export class AccountModule {}