import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCidDto {
  @IsString()
  @ApiProperty()
  code: string;

  @IsString()
  @ApiProperty()
  cid: string;

  @IsString()
  @ApiProperty()
  classification: string;

  @IsString()
  @ApiProperty()
  description: string;
}
