import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { MultipleWaysToPlayController } from './multiplewaystoplay.controller';
import { MultipleWaysToPlayService } from './multiplewaystoplay.service';

@Module({
  imports: [PrismaModule],
  controllers: [MultipleWaysToPlayController],
  providers: [MultipleWaysToPlayService],
})
export class MultipleWaysToPlayModule {}
