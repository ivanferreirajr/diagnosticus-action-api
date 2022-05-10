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
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';

@Table({ tableName: 'classrooms' })
export class Classroom extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @Unique(true)
  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  code: string;

  @ForeignKey(() => User)
  id_professor: User;

  @BelongsTo(() => User)
  professor: User;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
