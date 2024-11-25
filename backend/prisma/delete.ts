import { PrismaClient } from '@prisma/client';
import { deleteRiotGames } from './data/riotgames/deleteRiotGames';
import { deleteLeagueOfLegends } from './data/leagueoflegends/deleteLeagueOfLegends';

const prisma = new PrismaClient();
async function main() {
  await deleteRiotGames();
  await deleteLeagueOfLegends();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
