import { IsNumber, IsString } from 'class-validator';

export class CreateDiagnosisDto {
  @IsString()
  id_cid: string;

  @IsNumber()
  id_simulation: number;

  @IsString()
  treatment: string;
}
