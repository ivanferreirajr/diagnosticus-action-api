import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user', tags: ['User'] })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users', tags: ['User'] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a user', tags: ['User'] })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user', tags: ['User'] })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const { numberOfAffectedRows, updatedUser } =
      await this.usersService.update(+id, updateUserDto);

    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This User doesn't exist");
    }

    return updatedUser;
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user', tags: ['User'] })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
