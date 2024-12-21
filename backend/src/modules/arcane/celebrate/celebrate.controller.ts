import { Controller, Get } from '@nestjs/common';
import { CelebrateService } from './celebrate.service';

@Controller('api/arcane/celebrate')
export class CelebrateController {
  constructor(private readonly celebrateService: CelebrateService) {}

  @Get()
  getAllCelebrate() {
    return this.celebrateService.getAll();
  }
}
