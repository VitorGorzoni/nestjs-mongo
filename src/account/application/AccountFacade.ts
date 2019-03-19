import { AccountEntity } from '../domain/entity/AccountEntity';
import { AccountDTO } from '../domain/dto/AccountDTO';

export interface AccountFacade {
    findAll(): Promise<AccountEntity[]>;
    create(accountDTO: AccountDTO): Promise<AccountEntity>;
}