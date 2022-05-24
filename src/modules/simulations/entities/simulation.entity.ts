import {
  Column,
  PrimaryKey,
  DataType,
  Model,
  Table,
  AutoIncrement,
  UpdatedAt,
  CreatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { EmergencyCase } from 'src/modules/emergency-case/entities/emergency-case.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Table({ tableName: 'simulations' })
export class Simulation extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => User)
  id_student: User;

  @BelongsTo(() => User)
  student: User;

  @ForeignKey(() => EmergencyCase)
  id_emergency_case: EmergencyCase;

  @BelongsTo(() => EmergencyCase)
  emergency_case: EmergencyCase;

  @Column({ type: DataType.FLOAT })
  score: number;

  @Column({ type: DataType.TEXT })
  observation: string;

  @Column({ type: DataType.INTEGER })
  simulation_total_time: number;

  @Column({ type: DataType.BOOLEAN })
  timeout: boolean;

  @Column({ type: DataType.DATE })
  simulation_end: Date;

  @Column({ type: DataType.DATE })
  simulation_start: Date;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
