import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EmergencyCaseService } from './emergency-case.service';
import { CreateEmergencyCaseDto } from './dto/create-emergency-case.dto';
import { UpdateEmergencyCaseDto } from './dto/update-emergency-case.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('emergency-case')
export class EmergencyCaseController {
  constructor(private readonly emergencyCaseService: EmergencyCaseService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a emergency case',
    tags: ['Emergency Case'],
  })
  create(@Body() createEmergencyCaseDto: CreateEmergencyCaseDto) {
    return this.emergencyCaseService.create(createEmergencyCaseDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all emergency cases',
    tags: ['Emergency Case'],
  })
  findAll() {
    return this.emergencyCaseService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a emergency case',
    tags: ['Emergency Case'],
  })
  findOne(@Param('id') id: string) {
    return this.emergencyCaseService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update a emergency case',
    tags: ['Emergency Case'],
  })
  update(
    @Param('id') id: string,
    @Body() updateEmergencyCaseDto: UpdateEmergencyCaseDto,
  ) {
    return this.emergencyCaseService.update(+id, updateEmergencyCaseDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a emergency case',
    tags: ['Emergency Case'],
  })
  remove(@Param('id') id: string) {
    return this.emergencyCaseService.remove(+id);
  }
}
