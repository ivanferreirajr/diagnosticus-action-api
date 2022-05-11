import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClassroomDto {
  @IsString()
  @IsNotEmpty()
  name: number;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  id_professor: number;
}
