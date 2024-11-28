import { PrismaClient } from '@prisma/client';
import { deleteRiotGames } from './data/riotgames/deleteRiotGames';
import { deleteLeagueOfLegends } from './data/leagueoflegends/deleteLeagueOfLegends';
import { deleteValorant } from './data/valorant/deleteValorant';

const prisma = new PrismaClient();
async function main() {
  await deleteRiotGames();
  await deleteLeagueOfLegends();
  await deleteValorant();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
