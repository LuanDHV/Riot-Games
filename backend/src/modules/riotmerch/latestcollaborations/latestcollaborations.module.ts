import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { LatestCollaborationsController } from './latestcollaborations.controller';
import { LatestCollaborationsService } from './latestcollaborations.service';

@Module({
  imports: [PrismaModule],
  controllers: [LatestCollaborationsController],
  providers: [LatestCollaborationsService],
})
export class LatestCollaborationsModule {}
