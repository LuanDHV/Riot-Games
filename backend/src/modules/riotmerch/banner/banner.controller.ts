import { Controller, Get } from '@nestjs/common';
import { BannerService } from './banner.service';

@Controller('api/riotmerch/banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  getAllBanner() {
    return this.bannerService.getAll();
  }
}
