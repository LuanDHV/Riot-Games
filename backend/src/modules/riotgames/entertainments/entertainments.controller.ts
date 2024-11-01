import { Controller, Get } from '@nestjs/common';
import { EntertainmentsService } from './entertainments.service';

@Controller('api/riotgames/entertainments')
export class EntertainmentsController {
  constructor(private readonly entertainmentsService: EntertainmentsService) {}

  @Get()
  getAllEntertainments() {
    return this.entertainmentsService.getAll();
  }
}
