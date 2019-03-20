import { ApiModelProperty } from '@nestjs/swagger';

export class AccountDTO {
    @ApiModelProperty()
    readonly name?: string;
    
    @ApiModelProperty()
    readonly email?: string;
}