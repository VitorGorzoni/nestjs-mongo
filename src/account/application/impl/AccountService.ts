import { Injectable } from '@nestjs/common';
import { AccountFacade } from '../AccountFacade';
import { AccountRepository } from 'src/account/infrastructure/AccountRepository';
import { AccountEntity } from 'src/account/domain/entity/AccountEntity';
import { AccountDTO } from 'src/account/domain/dto/AccountDTO';

@Injectable()
export class AccountService implements AccountFacade {

    constructor(private readonly accountRepository: AccountRepository) {}

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountRepository.findAll();
    }

    async create(accountDTO: AccountDTO): Promise<AccountEntity> {
        return await this.accountRepository.create(accountDTO);
    }
}