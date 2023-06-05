import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'email', async: true })
@Injectable()
export class CustomEmailvalidation implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(value: string): Promise<boolean> {
    return this.prisma.user
      .findFirst({ where: { email: value } })
      .then((user) => {
        if (user) return false;
        return true;
      });
  }
  defaultMessage(args: ValidationArguments) {
    return `Email ${args.value} already exist`;
  }
}
