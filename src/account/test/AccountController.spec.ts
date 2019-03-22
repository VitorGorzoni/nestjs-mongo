import { Test } from '@nestjs/testing';
import * as mongoose from 'mongoose';
import { AccountController } from '../controller/AccountController';
import { AccountService } from '../service/impl/AccountService';
import { AccountModule } from '../account.module';
import { AccountEntity } from '../model/entity/AccountEntity';

describe('AccountController', () => {
    let accountController: AccountController;
    let accountService: AccountService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [AccountModule]
        }).compile();

        accountController = module.get<AccountController>(AccountController);
        accountService = module.get<AccountService>(AccountService);
    });

    afterAll(() => mongoose.disconnect());

    describe('findAll', () => {
        it('should return an array of accounts', async (done) => {

            const accounts: AccountEntity[] = [{ name: 'Vitor', email: 'email@test.com' }];
            jest.spyOn(accountService, 'findAll').mockImplementation(() => Promise.resolve(accounts));
            expect(await accountController.findAll()).toBe(accounts);
            done();
        });
    });
});