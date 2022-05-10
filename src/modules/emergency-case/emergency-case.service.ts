import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Complaint } from '../complaints/entities/complaint.entity';
import { Exam } from '../exams/entities/exam.entity';
import { Patient } from '../patients/entities/patient.entity';
import { CreateEmergencyCaseDto } from './dto/create-emergency-case.dto';
import { UpdateEmergencyCaseDto } from './dto/update-emergency-case.dto';
import { EmergencyCase } from './entities/emergency-case.entity';

@Injectable()
export class EmergencyCaseService {
  constructor(
    @InjectModel(EmergencyCase)
    private emergencyCaseModel: typeof EmergencyCase,
  ) {}

  create(createEmergencyCaseDto: CreateEmergencyCaseDto) {
    return this.emergencyCaseModel.create({
      ...createEmergencyCaseDto,
    });
  }

  async findAll(): Promise<EmergencyCase[]> {
    return this.emergencyCaseModel.findAll();
  }

  findOne(id: number): Promise<EmergencyCase> {
    return this.emergencyCaseModel.findOne({
      where: {
        id,
      },
      include: [Exam, Complaint, Patient],
    });
  }

  async update(id: number, updateEmergencyCaseDto: UpdateEmergencyCaseDto) {
    const [numberOfAffectedRows, [updatedEmergencyCase]] =
      await this.emergencyCaseModel.update(
        { ...updateEmergencyCaseDto },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedEmergencyCase };
  }

  async remove(id: number): Promise<void> {
    const emergencyCase = await this.emergencyCaseModel.findByPk(id);
    await emergencyCase.destroy();
  }
}
