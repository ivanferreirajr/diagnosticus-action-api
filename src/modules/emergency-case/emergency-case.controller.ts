import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmergencyCaseService } from './emergency-case.service';
import { CreateEmergencyCaseDto } from './dto/create-emergency-case.dto';
import { UpdateEmergencyCaseDto } from './dto/update-emergency-case.dto';

@Controller('emergency-case')
export class EmergencyCaseController {
  constructor(private readonly emergencyCaseService: EmergencyCaseService) {}

  @Post()
  create(@Body() createEmergencyCaseDto: CreateEmergencyCaseDto) {
    return this.emergencyCaseService.create(createEmergencyCaseDto);
  }

  @Get()
  findAll() {
    return this.emergencyCaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emergencyCaseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmergencyCaseDto: UpdateEmergencyCaseDto,
  ) {
    return this.emergencyCaseService.update(+id, updateEmergencyCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emergencyCaseService.remove(+id);
  }
}
