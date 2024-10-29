import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAll() {
  try {
    const deletedItems = await prisma.whatsHappening.deleteMany({});
    console.log(`Deleted ${deletedItems.count} items.`);
  } catch (error) {
    console.error('Error deleting items:', error);
  }
}

async function main() {
  await deleteAll();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
