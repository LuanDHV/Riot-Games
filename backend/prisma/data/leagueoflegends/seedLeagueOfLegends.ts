import { PrismaClient } from '@prisma/client';
import { FeaturedNews } from './featurednews';
import { ChooseYourChampion } from './chooseyourchampion';
import { MultipleWaysToPlay } from './multiplewaystoplay';

const prisma = new PrismaClient();

export async function seedLeagueOfLegends() {
  await seedData(prisma.featuredNews, FeaturedNews, 'img');
  await seedData(prisma.chooseYourChampion, ChooseYourChampion, 'role');
  await seedData(prisma.multipleWaysToPlay, MultipleWaysToPlay, 'way');

  console.log('League Of Legends data seeded successfully.');
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
