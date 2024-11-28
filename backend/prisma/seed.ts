import { PrismaClient } from '@prisma/client';
import { seedRiotGames } from './data/riotgames/seedRiotGames';
import { seedLeagueOfLegends } from './data/leagueoflegends/seedLeagueOfLegends';
import { seedValorant } from './data/valorant/seedValorant';

const prisma = new PrismaClient();

async function main() {
  await seedRiotGames();
  await seedLeagueOfLegends();
  await seedValorant();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
