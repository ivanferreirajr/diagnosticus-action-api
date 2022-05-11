import {
  Column,
  PrimaryKey,
  DataType,
  Model,
  Table,
  UpdatedAt,
  CreatedAt,
  BelongsTo,
  ForeignKey,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';
import { Classroom } from 'src/modules/classroom/entities/classroom.entity';
import { Complaint } from 'src/modules/complaints/entities/complaint.entity';
import { Exam } from 'src/modules/exams/entities/exam.entity';
import { Patient } from 'src/modules/patients/entities/patient.entity';

@Table({ tableName: 'emergency_cases' })
export class EmergencyCase extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id: number;

  @ForeignKey(() => Classroom)
  id_classroom: Classroom;

  @BelongsTo(() => Classroom)
  classroom: Classroom;

  @ForeignKey(() => Patient)
  id_patient: Patient;

  @BelongsTo(() => Patient)
  patient: Patient;

  @ForeignKey(() => Exam)
  id_exam: Exam;

  @BelongsTo(() => Exam)
  exam: Exam;

  @ForeignKey(() => Complaint)
  id_complaint: Complaint;

  @BelongsTo(() => Complaint)
  complaint: Complaint;

  @Column({ type: DataType.INTEGER })
  patient_lifetime: number;

  @Column({ type: DataType.INTEGER })
  exam_time: number;

  @Column({ type: DataType.INTEGER })
  simulation_time: number;

  @Column({ type: DataType.TEXT })
  description: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;
}
