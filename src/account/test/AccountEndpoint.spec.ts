import { Test } from '@nestjs/testing';
import { AccountEndpoint } from '../view/AccountEndpoint';
import { AccountService } from '../application/impl/AccountService';
import { AccountModule } from '../account.module';
import { AccountEntity } from '../domain/entity/AccountEntity';

describe('AccountEndpoint', () => {
    let accountEndpoint: AccountEndpoint;
    let accountService: AccountService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [AccountModule]
        }).compile();

        accountEndpoint = module.get<AccountEndpoint>(AccountEndpoint);
        accountService = module.get<AccountService>(AccountService);
    });

    describe('findAll', () => {
        it('should return an array of accounts', async () => {

            const accounts: AccountEntity[] = [{ name: 'Vitor', email: 'email@test.com' }];
            jest.spyOn(accountService, 'findAll').mockImplementation(() => Promise.resolve(accounts));
            expect(await accountEndpoint.findAll()).toBe(accounts);
        });
    });
});