import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { EpisodeStillsController } from './episodestills.controller';
import { EpisodeStillsService } from './episodestills.service';

@Module({
  imports: [PrismaModule],
  controllers: [EpisodeStillsController],
  providers: [EpisodeStillsService],
})
export class EpisodeStillsModule {}
