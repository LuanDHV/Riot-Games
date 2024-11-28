import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteTeamFightTactics() {
  await deleteAll(prisma.latestNews, 'LatestNews');

  console.log('All Team Fight Tactics data deleted.');
}

// Generic function to clear data for different tables and reset sequence
async function deleteAll(model: any, modelName: string) {
  const deletedItems = await model.deleteMany({});
  console.log(`Deleted ${deletedItems.count} items from ${modelName}.`);
  await prisma.$executeRawUnsafe(
    `ALTER SEQUENCE "${modelName}_id_seq" RESTART WITH 1;`,
  );
}
