import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDiagnosisDto {
  @IsString()
  @ApiProperty()
  id_cid: string;

  @IsNumber()
  @ApiProperty()
  id_simulation: number;

  @IsString()
  @ApiProperty()
  treatment: string;
}
