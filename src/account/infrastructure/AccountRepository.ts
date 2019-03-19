
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AccountEntity } from '../domain/entity/AccountEntity';

@Injectable()
export class AccountRepository {

    constructor(@InjectModel('Account') private readonly accountModel: Model<AccountEntity>) { }

    async findAll(): Promise<AccountEntity[]> {
        return await this.accountModel.find().exec();
    }
}