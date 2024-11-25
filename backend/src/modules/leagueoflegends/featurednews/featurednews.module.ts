import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { FeaturedNewsController } from './featurednews.controller';
import { FeaturedNewsService } from './featurednews.service';

@Module({
  imports: [PrismaModule],
  controllers: [FeaturedNewsController],
  providers: [FeaturedNewsService],
})
export class FeaturedNewsModule {}
