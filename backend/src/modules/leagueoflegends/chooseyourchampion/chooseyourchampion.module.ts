import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { ChooseYourChampionController } from './chooseyourchampion.controller';
import { ChooseYourChampionService } from './chooseyourchampion.service';

@Module({
  imports: [PrismaModule],
  controllers: [ChooseYourChampionController],
  providers: [ChooseYourChampionService],
})
export class ChooseYourChampionModule {}
