import { IsString } from 'class-validator';

export class UpdatePatientDto {
  @IsString()
  name: string;

  @IsString()
  hda: string;

  @IsString()
  gender: string;

  @IsString()
  marital_status: string;

  @IsString()
  nationality: string;

  @IsString()
  occupation: string;

  @IsString()
  personal_background: string;

  @IsString()
  family_background: string;

  @IsString()
  psychological_history: string;
}
