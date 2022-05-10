import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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
    // TODO: validate fields
    const hash = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: hash,
      registration_number: createUserDto.registration_number,
      role: createUserDto.role,
    });

    user.password = undefined;

    return user;
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
      include: [
        { association: 'classroom', attributes: { exclude: ['password'] } },
      ],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    delete updateUserDto.password;

    const [numberOfAffectedRows, [updatedPatient]] =
      await this.userModel.update(
        { ...updateUserDto },
        { where: { id }, returning: true },
      );

    return { numberOfAffectedRows, updatedPatient };
  }

  async remove(id: string): Promise<void> {
    const user = await this.userModel.findByPk(id);
    await user.destroy();
  }
}
