import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {
    const { numberOfAffectedRows, updatedPatient } =
      await this.patientsService.update(+id, updatePatientDto);

    // if the number of row affected is zero, it means the post doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Patient doesn't exist");
    }

    return updatedPatient;
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
