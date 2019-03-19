import { Injectable } from '@nestjs/common';
import { AccountFacade } from '../AccountFacade';
import { AccountRepository } from 'src/account/infrastructure/AccountRepository';
import { AccountEntity } from 'src/account/domain/entity/AccountEntity';

@Injectable()
export class AccountService implements AccountFacade {

    constructor(private readonly accountRepository: AccountRepository) {}

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountRepository.findAll();
    }
}