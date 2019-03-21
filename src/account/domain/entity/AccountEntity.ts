import { Document } from 'mongoose';

export interface AccountEntity extends Document {
    readonly name?: string;
    readonly email?: string;
}