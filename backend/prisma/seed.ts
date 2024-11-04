import { PrismaClient } from '@prisma/client';
import { seedRiotGames } from './data/riotgames/seedRiotGames';

const prisma = new PrismaClient();

async function main() {
  await seedRiotGames();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
