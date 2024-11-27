import { Controller, Get } from '@nestjs/common';
import { MultipleWaysToPlayService } from './multiplewaystoplay.service';

@Controller('api/leagueoflegends/multiplewaystoplay')
export class MultipleWaysToPlayController {
  constructor(
    private readonly multipleWaysToPlayService: MultipleWaysToPlayService,
  ) {}

  @Get()
  getAllMultipleWaysToPlayn() {
    return this.multipleWaysToPlayService.getAll();
  }
}
