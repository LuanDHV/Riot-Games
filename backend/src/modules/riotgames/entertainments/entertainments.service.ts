import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EntertainmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.entertainments.findMany();
  }
}
