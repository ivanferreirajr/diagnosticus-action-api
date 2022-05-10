import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCidDto } from './dto/create-cid.dto';
import { UpdateCidDto } from './dto/update-cid.dto';
import { Cid } from './entities/cid.entity';

@Injectable()
export class CidService {
  constructor(
    @InjectModel(Cid)
    private cidModel: typeof Cid,
  ) {}

  create(createCidDto: CreateCidDto) {
    return this.cidModel.create({
      ...createCidDto,
    });
  }

  findAll() {
    return this.cidModel.findAll();
  }

  findOne(id: string) {
    return this.cidModel.findOne({
      where: {
        code: id,
      },
    });
  }

  async update(id: string, updateCidDto: UpdateCidDto) {
    const cid = await this.cidModel.findOne({
      where: {
        code: id,
      },
    });

    cid.update({
      ...updateCidDto,
    });

    return cid;
  }

  async remove(id: string) {
    const cid = await this.cidModel.findOne({
      where: {
        code: id,
      },
    });
    await cid.destroy();
  }
}
