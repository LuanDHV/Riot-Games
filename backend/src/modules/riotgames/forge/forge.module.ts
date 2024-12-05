import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { ForgeController } from './forge.controller';
import { ForgeService } from './forge.service';

@Module({
  imports: [PrismaModule],
  controllers: [ForgeController],
  providers: [ForgeService],
})
export class ForgeModule {}
