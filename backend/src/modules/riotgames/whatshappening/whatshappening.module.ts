import { Module } from '@nestjs/common';
import { WhatsHappeningController } from './whatshappening.controller';
import { WhatsHappeningService } from './whatshappening.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WhatsHappeningController],
  providers: [WhatsHappeningService],
})
export class WhatsHappeningModule {}
