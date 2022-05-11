import {
  Column,
  Table,
  Model,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'cid' })
export class Cid extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING })
  code: string;

  @Column({ type: DataType.STRING })
  cid: string;

  @Column({ type: DataType.STRING })
  classification: string;

  @Column({ type: DataType.STRING })
  description: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
