import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exam } from './entities/exam.entity';

@Module({
  imports: [SequelizeModule.forFeature([Exam])],
  controllers: [ExamsController],
  providers: [ExamsService],
})
export class ExamsModule {}
