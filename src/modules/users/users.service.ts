import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Classroom } from '../classesroom/entities/classroom.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
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
