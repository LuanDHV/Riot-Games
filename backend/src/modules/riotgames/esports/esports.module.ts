import { Module } from '@nestjs/common';
import { EsportsController } from './esports.controller';
import { EsportsService } from './esports.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EsportsController],
  providers: [EsportsService],
})
export class EsportsModule {}
