import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { AccountEntity } from '../../model/entity/AccountEntity';
import { AccountDTO } from '../../model/dto/AccountDTO';
import { AccountFacade } from '../AccountFacade';

@Injectable()
export class AccountService implements AccountFacade {
    constructor(@Inject('ACCOUNT_MODEL') private readonly accountModel: Model<AccountEntity>) { }

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountModel.find().exec();
    }

    async findById(id: string): Promise<AccountEntity> {
        return await this.accountModel.findOne({_id: id});
    }

    async create(accountDTO: AccountDTO): Promise<AccountEntity> {
        const account = new this.accountModel(accountDTO);
        return await account.save();
    }

    async update(id: string, accountDTO: AccountDTO): Promise<AccountEntity> {
        return await this.accountModel.updateOne({_id: id}, accountDTO);
    }

    async delete(id: string): Promise<AccountEntity> {
        return await this.accountModel.deleteOne({_id: id});
    }
}