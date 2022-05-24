import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectModel(Exam)
    private examModel: typeof Exam,
  ) {}

  create(createExamDto: CreateExamDto) {
    return this.examModel.create({
      name: createExamDto.name,
      type: createExamDto.type,
      description: createExamDto.description,
    });
  }

  findAll() {
    return this.examModel.findAll();
  }

  findOne(id: number) {
    return this.examModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateExamDto: UpdateExamDto) {
    const exam = await this.examModel.findByPk(id, {
      rejectOnEmpty: true,
    });

    exam.update({
      name: updateExamDto.name,
      type: updateExamDto.type,
      description: updateExamDto.description,
    });

    return exam;
  }

  async remove(id: number) {
    const exam = await this.examModel.findByPk(id);
    await exam.destroy();
  }
}
