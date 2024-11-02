import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class WhatsHappeningService {
  constructor(private readonly prisma: PrismaService) {}
  async getAll() {
    const whatsHappeningItems = await this.prisma.whatsHappening.findMany();
    if (whatsHappeningItems.length === 0) {
      return [];
    }
    // Check the largest ID
    const maxIdItem = whatsHappeningItems.reduce((prev, current) => {
      return prev.id > current.id ? prev : current;
    });
    //Mark thumbMain as true for the item with the largest ID
    return whatsHappeningItems.map((item) => ({
      ...item,
      thumbMain: item.id === maxIdItem.id ? true : false,
    }));
  }
}
