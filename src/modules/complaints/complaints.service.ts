import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { Complaint } from './entities/complaint.entity';

@Injectable()
export class ComplaintsService {
  constructor(
    @InjectModel(Complaint)
    private complaintModel: typeof Complaint,
  ) {}

  create(createComplaintDto: CreateComplaintDto) {
    return this.complaintModel.create({
      name: createComplaintDto.name,
      type: createComplaintDto.type,
      description: createComplaintDto.description,
    });
  }

  findAll() {
    return this.complaintModel.findAll();
  }

  findOne(id: number) {
    return this.complaintModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateComplaintDto: UpdateComplaintDto) {
    const complaint = await this.complaintModel.findByPk(id, {
      rejectOnEmpty: true,
    });
    complaint.update({
      name: updateComplaintDto.name,
      type: updateComplaintDto.type,
      description: updateComplaintDto.description,
    });
    return complaint;
  }

  async remove(id: number) {
    const complaint = await this.complaintModel.findByPk(id);
    await complaint.destroy();
  }
}
