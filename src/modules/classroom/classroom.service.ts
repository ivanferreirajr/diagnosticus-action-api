import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectModel(Classroom)
    private classroomModel: typeof Classroom,
  ) {}

  async create(createClassroomDto: CreateClassroomDto): Promise<Classroom> {
    return this.classroomModel.create<Classroom>({
      name: createClassroomDto.name,
      code: createClassroomDto.code,
      id_professor: createClassroomDto.id_professor,
    });
  }

  findAll() {
    return this.classroomModel.findAll({
      include: { association: 'professor' },
    });
  }

  findOne(id: number) {
    return this.classroomModel.findOne({
      where: {
        id,
      },
      include: { association: 'professor' },
    });
  }

  async update(
    id: number,
    updateClassroomDto: UpdateClassroomDto,
  ): Promise<Classroom> {
    const classroom = await this.classroomModel.findByPk(id, {
      rejectOnEmpty: true,
    });
    classroom.update({
      name: updateClassroomDto.name,
      code: updateClassroomDto.code,
    });
    return classroom;
  }

  async remove(id: number): Promise<void> {
    const classroom = await this.classroomModel.findByPk(id);
    await classroom.destroy();
  }
}
