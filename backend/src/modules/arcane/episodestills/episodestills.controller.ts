import { Controller, Get } from '@nestjs/common';
import { EpisodeStillsService } from './episodestills.service';

@Controller('api/arcane/episodestills')
export class EpisodeStillsController {
  constructor(private readonly episodeStillsService: EpisodeStillsService) {}

  @Get()
  getAllEpisodeStills() {
    return this.episodeStillsService.getAll();
  }
}
