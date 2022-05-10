import { IsString } from 'class-validator';

export class CreateCidDto {
  @IsString()
  code: string;

  @IsString()
  cid: string;

  @IsString()
  classification: string;

  @IsString()
  description: string;
}
