import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  id_doctor: number;

  @IsString()
  hda: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  marital_status: string;

  @IsString()
  nationality: string;

  @IsString()
  @IsNotEmpty()
  occupation: string;

  @IsString()
  @IsNotEmpty()
  personal_background: string;

  @IsString()
  @IsNotEmpty()
  family_background: string;

  @IsString()
  psychological_history: string;
}
