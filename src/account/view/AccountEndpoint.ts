import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, CacheInterceptor } from '@nestjs/common';
import { AccountService } from '../application/impl/AccountService';
import { AccountEntity } from '../domain/entity/AccountEntity';
import { AccountDTO } from '../domain/dto/AccountDTO';

@UseInterceptors(CacheInterceptor)
@Controller('account')
export class AccountEndpoint {

    constructor(private readonly accountService: AccountService) { }

    @Get()
    async findAll(): Promise<AccountEntity[]> {
        return await this.accountService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<AccountEntity> {
        return await this.accountService.findById(id);
    }

    @Post()
    async create(@Body() createDTO: AccountDTO): Promise<AccountEntity> {
        return this.accountService.create(createDTO);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() accountDTO: AccountDTO): Promise<AccountEntity> {
        return await this.accountService.update(id, accountDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<AccountEntity> {
        return await this.accountService.delete(id);
    }
}