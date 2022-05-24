import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';

@Controller('complaints')
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a complaint', tags: ['Complaints'] })
  create(@Body() createComplaintDto: CreateComplaintDto) {
    return this.complaintsService.create(createComplaintDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all complaints', tags: ['Complaints'] })
  findAll() {
    return this.complaintsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a complaint', tags: ['Complaints'] })
  findOne(@Param('id') id: string) {
    return this.complaintsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a complaint', tags: ['Complaints'] })
  update(
    @Param('id') id: string,
    @Body() updateComplaintDto: UpdateComplaintDto,
  ) {
    return this.complaintsService.update(+id, updateComplaintDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a complaint', tags: ['Complaints'] })
  remove(@Param('id') id: string) {
    return this.complaintsService.remove(+id);
  }
}
