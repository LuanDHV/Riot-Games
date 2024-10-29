import { Controller, Get } from '@nestjs/common';
import { WhatsHappeningService } from './whatshappening.service';

@Controller('api/riotgames/whatshappening')
export class WhatsHappeningController {
  constructor(private readonly whatsHappeningService: WhatsHappeningService) {}

  @Get()
  getAllWhatsHappening() {
    return this.whatsHappeningService.getAll();
  }
}
