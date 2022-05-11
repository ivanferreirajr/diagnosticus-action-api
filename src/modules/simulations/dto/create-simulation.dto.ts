import { IsDateString, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateSimulationDto {
  @IsNumber()
  id_student: number;

  @IsNumber()
  id_emergency_case: number;

  @IsNumber()
  score: number;

  @IsString()
  observation: string;

  @IsNumber()
  simulation_total_time: number;

  @IsBoolean()
  timeout: boolean;

  @IsDateString()
  simulation_end: Date;

  @IsDateString()
  simulation_start: Date;
}
