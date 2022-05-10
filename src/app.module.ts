import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
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
      models: [User, Classroom, Patient, Exam, Complaint],
    }),
    UsersModule,
    ClassroomModule,
    PatientsModule,
    ExamsModule,
    ComplaintsModule,
  ],
})
export class AppModule {}
