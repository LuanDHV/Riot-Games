import { Controller, Get } from '@nestjs/common';
import { ChooseYourChampionService } from './chooseyourchampion.service';

@Controller('api/leagueoflegends/chooseyourchampion')
export class ChooseYourChampionController {
  constructor(
    private readonly chooseYourChampionService: ChooseYourChampionService,
  ) {}

  @Get()
  getAllChooseYourChampion() {
    return this.chooseYourChampionService.getAll();
  }
}
