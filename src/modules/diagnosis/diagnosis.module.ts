import { Module } from '@nestjs/common';
import { DiagnosisService } from './diagnosis.service';
import { DiagnosisController } from './diagnosis.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Diagnosis } from './entities/diagnosis.entity';

@Module({
  imports: [SequelizeModule.forFeature([Diagnosis])],
  controllers: [DiagnosisController],
  providers: [DiagnosisService],
})
export class DiagnosisModule {}
