import { Module } from '@nestjs/common';
import { ComplaintsService } from './complaints.service';
import { ComplaintsController } from './complaints.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Complaint } from './entities/complaint.entity';

@Module({
  imports: [SequelizeModule.forFeature([Complaint])],
  controllers: [ComplaintsController],
  providers: [ComplaintsService],
})
export class ComplaintsModule {}
