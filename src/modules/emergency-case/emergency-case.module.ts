import { Module } from '@nestjs/common';
import { EmergencyCaseService } from './emergency-case.service';
import { EmergencyCaseController } from './emergency-case.controller';
import { EmergencyCase } from './entities/emergency-case.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([EmergencyCase])],
  controllers: [EmergencyCaseController],
  providers: [EmergencyCaseService],
})
export class EmergencyCaseModule {}
