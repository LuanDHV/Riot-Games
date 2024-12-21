import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller('api/arcane/Character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  getAllCharacter() {
    return this.characterService.getAll();
  }
}
