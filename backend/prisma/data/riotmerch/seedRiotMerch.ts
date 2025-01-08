import { PrismaClient } from '@prisma/client';
import { Banner } from './banner';
import { LatestCollaborations } from './latestcollaborations';

const prisma = new PrismaClient();

export async function seedRiotMerch() {
  await seedData(prisma.banner, Banner, 'name');
  await seedData(prisma.latestCollaborations, LatestCollaborations, 'numb');

  console.log('Riot Merch data seeded successfully.');
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
