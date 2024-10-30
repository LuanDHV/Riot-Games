import { Controller, Get } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('api/riotgames/games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAll();
  }
}
