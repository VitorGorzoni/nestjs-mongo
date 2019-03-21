import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountService } from './application/impl/AccountService';
import { AccountRepository } from './infrastructure/AccountRepository';
import { AccountEndpoint } from './view/AccountEndpoint';
import { AccountSchema } from './schema/account.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
        CacheModule.register()
    ],
    controllers: [AccountEndpoint],
    providers: [
        AccountService,
        AccountRepository
    ]
})
export class AccountModule { }