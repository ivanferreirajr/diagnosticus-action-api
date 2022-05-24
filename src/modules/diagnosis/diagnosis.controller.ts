import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { DiagnosisService } from './diagnosis.service';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';

@Controller('diagnosis')
export class DiagnosisController {
  constructor(private readonly diagnosisService: DiagnosisService) {}

  @Post()
  @ApiOperation({ summary: 'Create diagnosis', tags: ['Diagnosis'] })
  create(@Body() createDiagnosisDto: CreateDiagnosisDto) {
    return this.diagnosisService.create(createDiagnosisDto);
  }

  @Get()
  @ApiOperation({ summary: 'Gel all diagnosis', tags: ['Diagnosis'] })
  findAll() {
    return this.diagnosisService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a diagnosis', tags: ['Diagnosis'] })
  findOne(@Param('id') id: string) {
    return this.diagnosisService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a diagnosis', tags: ['Diagnosis'] })
  update(
    @Param('id') id: string,
    @Body() updateDiagnosisDto: UpdateDiagnosisDto,
  ) {
    return this.diagnosisService.update(+id, updateDiagnosisDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a diagnosis', tags: ['Diagnosis'] })
  remove(@Param('id') id: string) {
    return this.diagnosisService.remove(+id);
  }
}
