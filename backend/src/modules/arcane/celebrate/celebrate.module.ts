import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { CelebrateController } from './celebrate.controller';
import { CelebrateService } from './celebrate.service';

@Module({
  imports: [PrismaModule],
  controllers: [CelebrateController],
  providers: [CelebrateService],
})
export class CelebrateModule {}
