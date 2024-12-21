import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CelebrateService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.celebrate.findMany();
  }
}
