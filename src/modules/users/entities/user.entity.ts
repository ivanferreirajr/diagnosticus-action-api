import {
  Column,
  PrimaryKey,
  DataType,
  Model,
  Table,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
  Unique,
} from 'sequelize-typescript';
import { UserRole } from './user.enums';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Unique
  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Unique
  @Column({ type: DataType.STRING })
  registration_number: string;

  @Column({ type: DataType.STRING, defaultValue: UserRole.STUDENT })
  role: string;

  @Column({ type: DataType.INTEGER })
  id_classroom: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
