import { PrismaClient } from '@prisma/client';
import { SliderBanner } from './sliderBanner';

const prisma = new PrismaClient();

export async function seedArcane() {
  await seedData(prisma.sliderBanner, SliderBanner, 'img');

  console.log('Arcane data seeded successfully.');
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
