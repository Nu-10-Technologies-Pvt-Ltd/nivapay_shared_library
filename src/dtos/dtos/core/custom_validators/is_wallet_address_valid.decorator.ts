import { registerDecorator, ValidationOptions, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, isUUID } from 'class-validator';
import { HttpException, HttpStatus } from '@nestjs/common';
import { validate_wallet_address } from '../../../../services/validate';
import { getById } from '../../../../fetch_nivapay_services/services/core/nivapay_crypto_currency';
import { getInterComApiKey } from '../../../../fetch_nivapay_services/services/core/aws_secret_manager';

interface params {
  currency_id: string;
}

@ValidatorConstraint({ async: true })
export class IsWalletAddressvalidConstraint implements ValidatorConstraintInterface {
  constructor(
  ) { }

  async validate(wallet_address: string, args: ValidationArguments): Promise<boolean> {
    const { currency_id } = args.object as params;
    const env = process.env.NODE_ENV;
    console.log("#### Node_ENV", env)
    const i_api_key = await getInterComApiKey(env)
    console.log("#### i_api_key", i_api_key)

    const currency_details = await getById(env, i_api_key, {
      id: currency_id
    })
    return validate_wallet_address(currency_details.network, wallet_address)
  }
  defaultMessage(): string {
    return null
  }
}

export function IsWalletAddressValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsNetworkFeeConfigExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsWalletAddressvalidConstraint
    });
  };
}


