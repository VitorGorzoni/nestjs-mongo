
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

    async create(accountDTO: AccountDTO): Promise<AccountEntity> {
        const created = new this.accountModel(accountDTO);
        return await created.save();
    }
}