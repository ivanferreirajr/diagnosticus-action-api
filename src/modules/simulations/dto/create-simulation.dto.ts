import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateSimulationDto {
  @IsNumber()
  @ApiProperty()
  id_student: number;

  @IsNumber()
  @ApiProperty()
  id_emergency_case: number;

  @IsNumber()
  @ApiProperty()
  score: number;

  @IsString()
  @ApiProperty()
  observation: string;

  @IsNumber()
  @ApiProperty()
  simulation_total_time: number;

  @IsBoolean()
  @ApiProperty()
  timeout: boolean;

  @IsDateString()
  @ApiProperty()
  simulation_end: Date;

  @IsDateString()
  @ApiProperty()
  simulation_start: Date;
}
