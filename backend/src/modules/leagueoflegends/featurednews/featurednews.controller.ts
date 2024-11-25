import { Controller, Get } from '@nestjs/common';
import { FeaturedNewsService } from './featurednews.service';

@Controller('api/leagueoflegends/featurednews')
export class FeaturedNewsController {
  constructor(private readonly featuredNewsService: FeaturedNewsService) {}

  @Get()
  getAllFeaturedNews() {
    return this.featuredNewsService.getAll();
  }
}
