import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEmail,
  IsEnum,
} from 'class-validator';
import { UserRole } from '../entities/user.enums';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  registration_number: string;

  @IsEnum(UserRole, {
    message: 'user role must be either student or professor',
  })
  role: string;

  @IsNumber()
  classroom: number;
}
