import { PrismaClient } from '@prisma/client';
import { whatshappening } from './whatshappening';
import { games } from './games';
import { esports } from './esports';
import { entertainments } from './entertainments';

const prisma = new PrismaClient();

export async function seedRiotGames() {
  await seedData(prisma.whatsHappening, whatshappening, 'title');
  await seedData(prisma.games, games, 'launchImg');
  await seedData(prisma.esports, esports, 'img');
  await seedData(prisma.entertainments, entertainments, 'img');

  console.log('Riot Games data seeded successfully.');
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
