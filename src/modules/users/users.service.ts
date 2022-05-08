import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findByPk(id, { rejectOnEmpty: true });
    user.update({ name: updateUserDto.name });
    return user;
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
