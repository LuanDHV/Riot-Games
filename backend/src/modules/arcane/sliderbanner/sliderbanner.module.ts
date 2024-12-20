import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { SliderBannerController } from './sliderbanner.controller';
import { SliderBannerService } from './sliderbanner.service';

@Module({
  imports: [PrismaModule],
  controllers: [SliderBannerController],
  providers: [SliderBannerService],
})
export class SliderBannerModule {}
