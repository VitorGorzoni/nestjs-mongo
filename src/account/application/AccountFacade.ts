import { AccountEntity } from '../domain/entity/AccountEntity';

export interface AccountFacade {
    findAll(): Promise<AccountEntity[]>;
}