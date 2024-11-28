import { Controller, Get } from '@nestjs/common';
import { LatestNewsService } from './latenews.service';

@Controller('api/teamfighttactics/latestnews')
export class LatestNewsController {
  constructor(private readonly latestNewsService: LatestNewsService) {}

  @Get()
  getAllLatestNews() {
    return this.latestNewsService.getAll();
  }
}
