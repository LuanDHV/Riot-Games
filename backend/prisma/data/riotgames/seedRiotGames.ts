import { PrismaClient } from '@prisma/client';
import { WhatsHappening } from './whatshappening';
import { Games } from './games';
import { Esports } from './esports';
import { Entertainments } from './entertainments';
import { Forge } from './forge';

const prisma = new PrismaClient();

export async function seedRiotGames() {
  await seedData(prisma.whatsHappening, WhatsHappening, 'title');
  await seedData(prisma.games, Games, 'launchImg');
  await seedData(prisma.esports, Esports, 'img');
  await seedData(prisma.entertainments, Entertainments, 'img');
  await seedData(prisma.forge, Forge, 'card');

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
