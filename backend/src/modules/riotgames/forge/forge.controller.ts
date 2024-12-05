import { Controller, Get } from '@nestjs/common';
import { ForgeService } from './forge.service';

@Controller('api/riotgames/forge')
export class ForgeController {
  constructor(private readonly forgeService: ForgeService) {}

  @Get()
  getAllForge() {
    return this.forgeService.getAll();
  }
}
