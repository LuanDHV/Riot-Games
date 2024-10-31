import { Controller, Get } from '@nestjs/common';
import { EsportsService } from './esports.service';

@Controller('api/riotgames/esports')
export class EsportsController {
  constructor(private readonly esportsService: EsportsService) {}

  @Get()
  getAllEsports() {
    return this.esportsService.getAll();
  }
}
