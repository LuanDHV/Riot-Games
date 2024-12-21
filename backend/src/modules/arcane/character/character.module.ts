import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

@Module({
  imports: [PrismaModule],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
