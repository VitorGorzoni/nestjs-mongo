import { Injectable } from '@nestjs/common';
import { AccountFacade } from '../AccountFacade';
import { AccountRepository } from '../../infrastructure/AccountRepository';
import { AccountEntity } from '../../domain/entity/AccountEntity';
import { AccountDTO } from '../../domain/dto/AccountDTO';

@Injectable()
export class AccountService implements AccountFacade {

    constructor(private readonly accountRepository: AccountRepository) {}

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountRepository.findAll();
    }

    async findById(id: string): Promise<AccountEntity> {
        return await this.accountRepository.findById(id);
    }

    async create(accountDTO: AccountDTO): Promise<AccountEntity> {
        return await this.accountRepository.create(accountDTO);
    }

    async update(id: string, accountDTO: AccountDTO): Promise<AccountEntity> {
        return await this.accountRepository.update(id, accountDTO);
    }

    async delete(id: string): Promise<AccountEntity> {
        return await this.accountRepository.delete(id);
    }
}