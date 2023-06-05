import { IsEmpty } from 'class-validator';

export class CreateShoppingDto {
  @IsEmpty()
  description: string;

  @IsEmpty()
  responsible: string;

  amount: string;
}
