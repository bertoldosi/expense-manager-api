import { IsEmail, IsNotEmpty, Validate } from 'class-validator';
import { CustomEmailvalidation } from '../validates/IsUserAlreadyExist';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @Validate(CustomEmailvalidation)
  email: string;

  expenses?: any;
}
