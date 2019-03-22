import { AccountEntity } from '../model/entity/AccountEntity';
import { AccountDTO } from '../model/dto/AccountDTO';

export interface AccountFacade {
    findById(id: string): Promise<AccountEntity>;
    findAll(): Promise<AccountEntity[]>;
    create(AccountDTO: AccountDTO): Promise<AccountEntity>;
    update(id: string, AccountDTO: AccountDTO): Promise<AccountEntity>;
    delete(id: string): Promise<AccountEntity>;
}