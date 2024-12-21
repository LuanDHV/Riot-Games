import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { PaPController } from './pap.controller';
import { PaPService } from './pap.service';

@Module({
  imports: [PrismaModule],
  controllers: [PaPController],
  providers: [PaPService],
})
export class PaPModule {}
