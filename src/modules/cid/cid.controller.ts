import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CidService } from './cid.service';
import { CreateCidDto } from './dto/create-cid.dto';
import { UpdateCidDto } from './dto/update-cid.dto';

@Controller('cid')
export class CidController {
  constructor(private readonly cidService: CidService) {}

  @Post()
  @ApiOperation({ summary: 'Create a cid', tags: ['Cid'] })
  create(@Body() createCidDto: CreateCidDto) {
    return this.cidService.create(createCidDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cids', tags: ['Cid'] })
  findAll() {
    return this.cidService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cid', tags: ['Cid'] })
  findOne(@Param('id') id: string) {
    return this.cidService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a cid', tags: ['Cid'] })
  update(@Param('id') id: string, @Body() updateCidDto: UpdateCidDto) {
    return this.cidService.update(id, updateCidDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a cid', tags: ['Cid'] })
  remove(@Param('id') id: string) {
    return this.cidService.remove(id);
  }
}
