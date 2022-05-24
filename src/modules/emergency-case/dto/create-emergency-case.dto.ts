import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateEmergencyCaseDto {
  @IsNumber()
  @ApiProperty()
  id_classroom: number;

  @IsNumber()
  @ApiProperty()
  id_patient: number;

  @IsNumber()
  @ApiProperty()
  id_exam: number;

  @IsNumber()
  @ApiProperty()
  id_complaint: number;

  @IsNumber()
  @ApiProperty()
  patient_lifetime: number;

  @IsNumber()
  @ApiProperty()
  exam_time: number;

  @IsNumber()
  @ApiProperty()
  simulation_time: number;

  @IsString()
  @ApiProperty()
  description: string;
}
