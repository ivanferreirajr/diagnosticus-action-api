import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { SimulationsService } from './simulations.service';
import { CreateSimulationDto } from './dto/create-simulation.dto';
import { UpdateSimulationDto } from './dto/update-simulation.dto';
import { ApiOperation } from '@nestjs/swagger';
import { Role } from '../auth/role/role.decorator';
import { JwtGuard } from '../auth/jwt-strategy/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';

@Controller('simulations')
export class SimulationsController {
  constructor(private readonly simulationsService: SimulationsService) {}

  @Role('professor')
  @UseGuards(JwtGuard, RoleGuard)
  @Post()
  @ApiOperation({ summary: 'Create a simulation', tags: ['Simulation'] })
  create(@Body() createSimulationDto: CreateSimulationDto) {
    return this.simulationsService.create(createSimulationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a simulation', tags: ['Simulation'] })
  findAll() {
    return this.simulationsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get all simulations', tags: ['Simulation'] })
  findOne(@Param('id') id: string) {
    return this.simulationsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a simulation', tags: ['Simulation'] })
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
  @ApiOperation({ summary: 'Delete a simulation', tags: ['Simulation'] })
  remove(@Param('id') id: string) {
    return this.simulationsService.remove(id);
  }
}
