import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('api/wildrift/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  getAllNews() {
    return this.newsService.getAll();
  }
}
