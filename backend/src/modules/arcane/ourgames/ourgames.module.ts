import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { OurGamesController } from './ourgames.controller';
import { OurGamesService } from './ourgames.service';

@Module({
  imports: [PrismaModule],
  controllers: [OurGamesController],
  providers: [OurGamesService],
})
export class OurGamesModule {}
