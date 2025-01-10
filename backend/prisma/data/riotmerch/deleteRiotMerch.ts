import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteRiotMerch() {
  await deleteAll(prisma.banner, 'Banner');
  await deleteAll(prisma.latestCollaborations, 'LatestCollaborations');
  await deleteAll(prisma.products, 'Products');

  console.log('All Riot Merch data deleted.');
}

// Generic function to clear data for different tables and reset sequence
async function deleteAll(model: any, modelName: string) {
  const deletedItems = await model.deleteMany({});
  console.log(`Deleted ${deletedItems.count} items from ${modelName}.`);
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "${modelName}_id_seq" RESTART WITH 1;`,
  );
}
