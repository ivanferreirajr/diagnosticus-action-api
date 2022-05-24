import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  id_doctor: number;

  @IsString()
  @ApiProperty()
  hda: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  gender: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  marital_status: string;

  @IsString()
  @ApiProperty()
  nationality: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  occupation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  personal_background: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  family_background: string;

  @IsString()
  @ApiProperty()
  psychological_history: string;
}
