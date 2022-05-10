import { IsString, IsNotEmpty } from 'class-validator';

export class CreateExamDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
