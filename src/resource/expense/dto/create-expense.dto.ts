import { IsEmpty } from 'class-validator';
import { CreateInstitutionDto } from 'src/resource/institution/dto/create-institution.dto';

export class CreateExpenseDto {
  @IsEmpty()
  name: string;

  institutions: CreateInstitutionDto[];
}
