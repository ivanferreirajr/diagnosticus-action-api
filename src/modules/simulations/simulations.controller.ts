import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';

@Controller('simulations')
export class SimulationsController {
  constructor(private readonly simulationsService: SimulationsService) {}

  @Post()
  create(@Body() createSimulationDto: CreateSimulationDto) {
    return this.simulationsService.create(createSimulationDto);
  }

  @Get()
  findAll() {
    return this.simulationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simulationsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSimulationDto: UpdateSimulationDto,
  ) {
    const { numberOfAffectedRows, updatedSimulation } =
      await this.simulationsService.update(+id, updateSimulationDto);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This User doesn't exist");
    }

    return updatedSimulation;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simulationsService.remove(id);
  }
}
