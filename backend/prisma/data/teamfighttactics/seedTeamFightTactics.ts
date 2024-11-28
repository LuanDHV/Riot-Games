import { PrismaClient } from '@prisma/client';
import { LatestNews } from './latestnews';

const prisma = new PrismaClient();

export async function seedTeamFightTactics() {
  await seedData(prisma.latestNews, LatestNews, 'img');

  console.log('Team Fight Tactics data seeded successfully.');
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
