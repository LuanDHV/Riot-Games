import { Controller, Get } from '@nestjs/common';
import { LatestCollaborationsService } from './latestcollaborations.service';

@Controller('api/riotmerch/latestcollaborations')
export class LatestCollaborationsController {
  constructor(
    private readonly latestCollaborationsService: LatestCollaborationsService,
  ) {}

  @Get()
  getAllLatestCollaborations() {
    return this.latestCollaborationsService.getAll();
  }
}
