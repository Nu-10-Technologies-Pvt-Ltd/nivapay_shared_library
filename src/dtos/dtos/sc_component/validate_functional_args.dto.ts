import { IsNotEmpty, IsString } from "class-validator";

export class validateSCFunctionalArgsDto {
    @IsNotEmpty()
    @IsString()
    smart_contract_id: string;

    @IsNotEmpty()
    functional_args: any;
}