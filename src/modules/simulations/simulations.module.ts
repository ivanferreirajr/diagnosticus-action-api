import { Module } from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { SimulationsController } from './simulations.controller';
import { Simulation } from './entities/simulation.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Simulation])],
  controllers: [SimulationsController],
  providers: [SimulationsService],
})
export class SimulationsModule {}
