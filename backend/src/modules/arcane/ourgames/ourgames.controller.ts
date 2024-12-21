import { Controller, Get } from '@nestjs/common';
import { OurGamesService } from './ourgames.service';

@Controller('api/arcane/ourgames')
export class OurGamesController {
  constructor(private readonly ourGamesService: OurGamesService) {}

  @Get()
  getAllOurGames() {
    return this.ourGamesService.getAll();
  }
}
