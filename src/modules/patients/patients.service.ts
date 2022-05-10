import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient)
    private patientModel: typeof Patient,
  ) {}

  create(createPatientDto: CreatePatientDto) {
    return this.patientModel.create({
      name: createPatientDto.name,
      id_doctor: createPatientDto.id_doctor,
      hda: createPatientDto.hda,
      gender: createPatientDto.gender,
      marital_status: createPatientDto.marital_status,
      occupation: createPatientDto.occupation,
      personal_background: createPatientDto.personal_background,
      family_background: createPatientDto.family_background,
      psychological_history: createPatientDto.psychological_history,
    });
  }

  findAll() {
    return this.patientModel.findAll();
  }

  findOne(id: number) {
    return this.patientModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const [numberOfAffectedRows, [updatedPatient]] =
      await this.patientModel.update(
        { ...updatePatientDto },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedPatient };
  }

  async remove(id: number) {
    const patient = await this.patientModel.findByPk(id);
    await patient.destroy();
  }
}
