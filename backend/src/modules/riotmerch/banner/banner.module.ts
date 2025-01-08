import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';

@Module({
  imports: [PrismaModule],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}
