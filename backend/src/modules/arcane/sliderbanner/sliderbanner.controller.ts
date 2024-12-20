import { Controller, Get } from '@nestjs/common';
import { SliderBannerService } from './sliderbanner.service';

@Controller('api/arcane/sliderbanner')
export class SliderBannerController {
  constructor(private readonly sliderBannerService: SliderBannerService) {}

  @Get()
  getAllSliderBanner() {
    return this.sliderBannerService.getAll();
  }
}
