import { Module, CacheModule } from '@nestjs/common';
import { AccountService } from './service/impl/AccountService';
import { AccountController } from './controller/AccountController';
import { accountProviders } from './account.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [CacheModule.register(), DatabaseModule],
    controllers: [AccountController],
    providers: [AccountService, ...accountProviders]
})
export class AccountModule { }