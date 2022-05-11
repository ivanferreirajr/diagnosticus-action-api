import {
  Column,
  PrimaryKey,
  DataType,
  Model,
  Table,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
  HasOne,
} from 'sequelize-typescript';
import { Classroom } from 'src/modules/classroom/entities/classroom.entity';
import { UserRole } from './user.enums';

@Table({ tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  registration_number: string;

  @Column({ type: DataType.STRING, defaultValue: UserRole.STUDENT })
  role: string;

  @HasOne(() => Classroom)
  classroom: Classroom;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
