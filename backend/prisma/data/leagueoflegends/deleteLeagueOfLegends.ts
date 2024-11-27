import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteLeagueOfLegends() {
  await deleteAll(prisma.featuredNews, 'FeaturedNews');
  await deleteAll(prisma.chooseYourChampion, 'ChooseYourChampion');

  console.log('All League Of Legends data deleted.');
}

// Generic function to clear data for different tables and reset sequence
async function deleteAll(model: any, modelName: string) {
  const deletedItems = await model.deleteMany({});
  console.log(`Deleted ${deletedItems.count} items from ${modelName}.`);
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "${modelName}_id_seq" RESTART WITH 1;`,
  );
}
