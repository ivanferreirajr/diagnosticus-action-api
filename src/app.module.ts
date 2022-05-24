import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { Classroom } from './modules/classroom/entities/classroom.entity';
import { PatientsModule } from './modules/patients/patients.module';
import { Patient } from './modules/patients/entities/patient.entity';
import { ExamsModule } from './modules/exams/exams.module';
import { Exam } from './modules/exams/entities/exam.entity';
import { ComplaintsModule } from './modules/complaints/complaints.module';
import { Complaint } from './modules/complaints/entities/complaint.entity';
import { EmergencyCaseModule } from './modules/emergency-case/emergency-case.module';
import { EmergencyCase } from './modules/emergency-case/entities/emergency-case.entity';
import { SimulationsModule } from './modules/simulations/simulations.module';
import { Simulation } from './modules/simulations/entities/simulation.entity';
import { CidModule } from './modules/cid/cid.module';

import { Cid } from './modules/cid/entities/cid.entity';
import { DiagnosisModule } from './modules/diagnosis/diagnosis.module';
import { Diagnosis } from './modules/diagnosis/entities/diagnosis.entity';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME_DEVELOPMENT,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      models: [
        User,
        Classroom,
        Patient,
        Exam,
        Complaint,
        Simulation,
        EmergencyCase,
        Cid,
        Diagnosis,
      ],
    }),
    UsersModule,
    ClassroomModule,
    PatientsModule,
    ExamsModule,
    ComplaintsModule,
    EmergencyCaseModule,
    SimulationsModule,
    CidModule,
    DiagnosisModule,
    AuthModule,
  ],
})
export class AppModule {}
