import { Module } from '@nestjs/common';
import { ClassroomService } from './classesroom.service';
import { ClassroomController } from './classesroom.controller';
import { Classroom } from './entities/classroom.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Classroom])],
  controllers: [ClassroomController],
  providers: [ClassroomService],
})
export class ClassroomModule {}
