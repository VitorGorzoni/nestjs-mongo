
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountEntity } from '../domain/entity/AccountEntity';
import { AccountDTO } from '../domain/dto/AccountDTO';

@Injectable()
export class AccountRepository {

    constructor(@InjectModel('Account') private readonly accountModel: Model<AccountEntity>) { }

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