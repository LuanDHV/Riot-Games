import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllWhatsHappening() {
  try {
    const deletedItems = await prisma.whatsHappening.deleteMany({});
    console.log(`Deleted ${deletedItems.count} items from WhatsHappening.`);

    // Reset sequence
    await prisma.$executeRaw`ALTER SEQUENCE "WhatsHappening_id_seq" RESTART WITH 1;`;
  } catch (error) {
    console.error('Error deleting WhatsHappening items:', error);
  }
}

async function deleteAllGames() {
  try {
    const deletedItems = await prisma.games.deleteMany({});
    console.log(`Deleted ${deletedItems.count} items from Games.`);

    // Reset sequence
    await prisma.$executeRaw`ALTER SEQUENCE "Games_id_seq" RESTART WITH 1;`;
  } catch (error) {
    console.error('Error deleting Games items:', error);
  }
}

async function main() {
  await deleteAllWhatsHappening();
  await deleteAllGames();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
