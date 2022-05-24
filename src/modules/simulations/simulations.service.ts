import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { EmergencyCase } from '../emergency-case/entities/emergency-case.entity';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { Simulation } from './entities/simulation.entity';

@Injectable()
export class SimulationsService {
  constructor(
    @InjectModel(Simulation)
    private simulationModel: typeof Simulation,
  ) {}

  async create(createSimulationDto: CreateSimulationDto) {
    const simulation = await this.simulationModel.create({
      ...createSimulationDto,
    });

    return simulation;
  }

  async findAll(): Promise<Simulation[]> {
    return this.simulationModel.findAll();
  }

  findOne(id: number): Promise<Simulation> {
    return this.simulationModel.findOne({
      where: {
        id,
      },
      include: EmergencyCase,
    });
  }

  async update(id: number, updateSimulationDto: UpdateSimulationDto) {
    const [numberOfAffectedRows, [updatedSimulation]] =
      await this.simulationModel.update(
        { ...updateSimulationDto },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedSimulation };
  }

  async remove(id: string) {
    const simulation = await this.simulationModel.findByPk(id);
    await simulation.destroy();
  }
}
