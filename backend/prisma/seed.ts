import { PrismaClient } from '@prisma/client';
import { seedRiotGames } from './data/riotgames/seedRiotGames';
import { seedLeagueOfLegends } from './data/leagueoflegends/seedLeagueOfLegends';

const prisma = new PrismaClient();

async function main() {
  await seedRiotGames();
  await seedLeagueOfLegends();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
