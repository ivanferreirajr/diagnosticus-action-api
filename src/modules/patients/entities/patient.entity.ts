import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';

@Table({ tableName: 'patients' })
export class Patient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Unique(true)
  @Column({ type: DataType.INTEGER })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => User)
  id_doctor: User;

  @BelongsTo(() => User)
  doctor: User;

  @Column({ type: DataType.STRING })
  hda: string;

  @Column({ type: DataType.STRING })
  gender: string;

  @Column({ type: DataType.STRING })
  marital_status: string;

  @Column({ type: DataType.STRING })
  nationality: string;

  @Column({ type: DataType.STRING })
  occupation: string;

  @Column({ type: DataType.TEXT })
  personal_background: string;

  @Column({ type: DataType.TEXT })
  family_background: string;

  @Column({ type: DataType.TEXT })
  psychological_history: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
