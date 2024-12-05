import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteRiotGames() {
  await deleteAll(prisma.whatsHappening, 'WhatsHappening');
  await deleteAll(prisma.games, 'Games');
  await deleteAll(prisma.esports, 'Esports');
  await deleteAll(prisma.entertainments, 'Entertainments');
  await deleteAll(prisma.forge, 'Forge');

  console.log('All Riot Games data deleted.');
}

// Generic function to clear data for different tables and reset sequence
async function deleteAll(model: any, modelName: string) {
  const deletedItems = await model.deleteMany({});
  console.log(`Deleted ${deletedItems.count} items from ${modelName}.`);
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "${modelName}_id_seq" RESTART WITH 1;`,
  );
}
