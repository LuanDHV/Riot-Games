import { PrismaClient } from '@prisma/client';
import { deleteRiotGames } from './data/riotgames/deleteRiotGames';

const prisma = new PrismaClient();
async function main() {
  await deleteRiotGames();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
