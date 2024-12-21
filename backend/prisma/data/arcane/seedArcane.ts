import { PrismaClient } from '@prisma/client';
import { SliderBanner } from './sliderBanner';
import { Celebrate } from './celebrate';
import { EpisodeStills } from './episodeStills';
import { PaP } from './paP';
import { Character } from './character';
import { OurGames } from './ourGames';

const prisma = new PrismaClient();

export async function seedArcane() {
  await seedData(prisma.sliderBanner, SliderBanner, 'img');
  await seedData(prisma.celebrate, Celebrate, 'img');
  await seedData(prisma.episodeStills, EpisodeStills, 'img');
  await seedData(prisma.paP, PaP, 'img');
  await seedData(prisma.character, Character, 'character');
  await seedData(prisma.ourGames, OurGames, 'background');

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
