import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cid } from '../cid/entities/cid.entity';
import { Simulation } from '../simulations/entities/simulation.entity';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { Diagnosis } from './entities/diagnosis.entity';

@Injectable()
export class DiagnosisService {
  constructor(
    @InjectModel(Diagnosis)
    private diagnosisModel: typeof Diagnosis,
  ) {}

  create(createDiagnosisDto: CreateDiagnosisDto) {
    return this.diagnosisModel.create({
      ...createDiagnosisDto,
    });
  }

  findAll() {
    return this.diagnosisModel.findAll();
  }

  findOne(id: number) {
    return this.diagnosisModel.findOne({
      where: { id },
      include: [Cid, Simulation],
    });
  }

  async update(id: number, updateDiagnosisDto: UpdateDiagnosisDto) {
    const diagnosis = await this.diagnosisModel.findOne({
      where: { id },
    });

    diagnosis.update({
      ...updateDiagnosisDto,
    });

    return diagnosis;
  }

  async remove(id: number) {
    const diagnosis = await this.diagnosisModel.findByPk(id);
    await diagnosis.destroy();
  }
}
