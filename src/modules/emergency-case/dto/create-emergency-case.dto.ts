import { IsNumber, IsString } from 'class-validator';

export class CreateEmergencyCaseDto {
  @IsNumber()
  id_classroom: number;

  @IsNumber()
  id_patient: number;

  @IsNumber()
  id_exam: number;

  @IsNumber()
  id_complaint: number;

  @IsNumber()
  patient_lifetime: number;

  @IsNumber()
  exam_time: number;

  @IsNumber()
  simulation_time: number;

  @IsString()
  description: string;
}
