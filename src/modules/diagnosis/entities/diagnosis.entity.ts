import {
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  Table,
} from 'sequelize-typescript';
import { Cid } from 'src/modules/cid/entities/cid.entity';
import { Simulation } from 'src/modules/simulations/entities/simulation.entity';

@Table({ tableName: 'diagnosis' })
export class Diagnosis extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => Cid)
  id_cid: Cid;

  @BelongsTo(() => Cid)
  cid: Cid;

  @ForeignKey(() => Simulation)
  id_simulation: Simulation;

  @BelongsTo(() => Simulation)
  simulation: Simulation;

  @Column({ type: DataType.STRING })
  treatment: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
