import { IsEmpty } from 'class-validator';

export class CreateInstitutionDto {
  @IsEmpty()
  name: string;

  amount: string;
  shoppings: any;
}
