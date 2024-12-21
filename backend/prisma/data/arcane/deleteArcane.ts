import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteArcane() {
  await deleteAll(prisma.sliderBanner, 'SliderBanner');
  await deleteAll(prisma.celebrate, 'Celebrate');
  await deleteAll(prisma.episodeStills, 'EpisodeStills');
  await deleteAll(prisma.paP, 'PaP');
  await deleteAll(prisma.character, 'Character');
  await deleteAll(prisma.ourGames, 'OurGames');

  console.log('All Arcane data deleted.');
}

// Generic function to clear data for different tables and reset sequence
async function deleteAll(model: any, modelName: string) {
  const deletedItems = await model.deleteMany({});
  console.log(`Deleted ${deletedItems.count} items from ${modelName}.`);
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "${modelName}_id_seq" RESTART WITH 1;`,
  );
}
