import { PrismaClient } from '@prisma/client';
import { deleteRiotGames } from './data/riotgames/deleteRiotGames';
import { deleteLeagueOfLegends } from './data/leagueoflegends/deleteLeagueOfLegends';
import { deleteValorant } from './data/valorant/deleteValorant';
import { deleteTeamFightTactics } from './data/teamfighttactics/deleteTeamfightTactics';
import { deleteWildRift } from './data/wildrift/deleteWildRift';
import { deleteArcane } from './data/arcane/deleteArcane';

const prisma = new PrismaClient();
async function main() {
  await deleteRiotGames();
  await deleteLeagueOfLegends();
  await deleteValorant();
  await deleteTeamFightTactics();
  await deleteWildRift();
  await deleteArcane();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
