import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Classroom } from '../classroom/entities/classroom.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);
    return this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
      registration_number: createUserDto.registration_number,
      role: createUserDto.role,
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({
      attributes: { exclude: ['password'] },
    });
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
      include: [{ model: Classroom, attributes: { exclude: ['password'] } }],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByPk(id, { rejectOnEmpty: true });
    user.update({
      name: updateUserDto.name,
      classroom: updateUserDto.classroom,
    });
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.userModel.findByPk(id);
    await user.destroy();
  }
}
