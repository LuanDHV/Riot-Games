import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { LatestNewsController } from './latenews.controller';
import { LatestNewsService } from './latenews.service';

@Module({
  imports: [PrismaModule],
  controllers: [LatestNewsController],
  providers: [LatestNewsService],
})
export class LatestNewsModule {}
