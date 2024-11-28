import { Controller, Get } from '@nestjs/common';
import { TheLatestService } from './thelatest.service';

@Controller('api/valorant/thelatest')
export class TheLatestController {
  constructor(private readonly theLatestService: TheLatestService) {}

  @Get()
  getAllTheLatest() {
    return this.theLatestService.getAll();
  }
}
