import { Module } from '@nestjs/common';
import { CidService } from './cid.service';
import { CidController } from './cid.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cid } from './entities/cid.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cid])],
  controllers: [CidController],
  providers: [CidService],
})
export class CidModule {}
