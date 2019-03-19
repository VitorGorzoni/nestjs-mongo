import { Controller, Get, Post, Body } from '@nestjs/common';
import { AccountService } from '../application/impl/AccountService';
import { AccountEntity } from '../domain/entity/AccountEntity';
import { AccountDTO } from '../domain/dto/AccountDTO';

@Controller('account')
export class AccountEndpoint {

    constructor(private readonly accountService: AccountService) { }

    @Get()
    findAll(): Promise<AccountEntity[]> {
        return this.accountService.findAll();
    }

    @Post()
    async create(@Body() createDTO: AccountDTO): Promise<AccountEntity> {
        return this.accountService.create(createDTO);
    }
}