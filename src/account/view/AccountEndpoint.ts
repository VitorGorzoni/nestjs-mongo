import { Controller, Get } from '@nestjs/common';
import { AccountService } from '../application/impl/AccountService';
import { AccountEntity } from '../domain/entity/AccountEntity';

@Controller('account')
export class AccountEndpoint {

    constructor(private readonly accountService: AccountService) {}

    @Get()
    findAll(): Promise<AccountEntity[]> {
        return this.accountService.findAll();
    }
}