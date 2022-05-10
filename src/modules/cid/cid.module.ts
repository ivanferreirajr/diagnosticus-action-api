import { Module } from '@nestjs/common';
import { CidService } from './cid.service';
import { CidController } from './cid.controller';

@Module({
  controllers: [CidController],
  providers: [CidService]
})
export class CidModule {}
