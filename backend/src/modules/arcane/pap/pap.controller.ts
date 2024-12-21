import { Controller, Get } from '@nestjs/common';
import { PaPService } from './pap.service';

@Controller('api/arcane/pap')
export class PaPController {
  constructor(private readonly paPService: PaPService) {}

  @Get()
  getAllPaP() {
    return this.paPService.getAll();
  }
}
