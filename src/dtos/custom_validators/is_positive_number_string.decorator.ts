import Decimal from "decimal.js";
import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isPositiveNumberString', async: false })
export class IsPositiveNumberStringConstraint implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments) {
        // Initialize a Decimal instance with the input value
        const decimalValue = new Decimal(value);

        // Check if the value is a positive number
        return decimalValue.greaterThan(0);
    }

    defaultMessage(args: ValidationArguments) {
        return 'Value must be a positive number.';
    }
}

export function IsPositiveNumberString(validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsPositiveNumberStringConstraint,
        });
    };
}
