import { PrismaClient } from '@prisma/client';
import { TheLatest } from './thelatest';

const prisma = new PrismaClient();

export async function seedValorant() {
  await seedData(prisma.theLatest, TheLatest, 'img');

  console.log('Valorant data seeded successfully.');
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
