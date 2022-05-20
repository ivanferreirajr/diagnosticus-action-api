import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('classrooms')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  @ApiOperation({ summary: 'Create a classroom', tags: ['Classrooms'] })
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all classrooms', tags: ['Classrooms'] })
  findAll() {
    return this.classroomService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a classroom', tags: ['Classrooms'] })
  findOne(@Param('id') id: string) {
    return this.classroomService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a classroom', tags: ['Classrooms'] })
  update(
    @Param('id') id: string,
    @Body() updateClassroomDto: UpdateClassroomDto,
  ) {
    return this.classroomService.update(+id, updateClassroomDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a classroom', tags: ['Classrooms'] })
  remove(@Param('id') id: string) {
    return this.classroomService.remove(+id);
  }
}
