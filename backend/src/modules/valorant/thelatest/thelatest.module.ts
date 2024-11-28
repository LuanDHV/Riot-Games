import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { TheLatestController } from './thelatest.controller';
import { TheLatestService } from './thelatest.service';

@Module({
  imports: [PrismaModule],
  controllers: [TheLatestController],
  providers: [TheLatestService],
})
export class TheLatestModule {}
