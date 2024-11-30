import { PrismaClient } from '@prisma/client';
import { News } from './news';

const prisma = new PrismaClient();

export async function seedWildRift() {
  await seedData(prisma.news, News, 'img');

  console.log('Wild Rift data seeded successfully.');
}

//Generic function to seed data for different tables
async function seedData(model: any, data: any[], uniqueField: string) {
  for (const item of data) {
    await model.upsert({
      where: { [uniqueField]: item[uniqueField] },
      update: item,
      create: item,
    });
  }
}
