import { PrismaClient } from '@prisma/client';
import { seedRiotGames } from './data/riotgames/seedRiotGames';
import { seedLeagueOfLegends } from './data/leagueoflegends/seedLeagueOfLegends';
import { seedValorant } from './data/valorant/seedValorant';
import { seedTeamFightTactics } from './data/teamfighttactics/seedTeamfightTactics';
import { seedWildRift } from './data/wildrift/seedWildRift';
import { seedArcane } from './data/arcane/seedArcane';

const prisma = new PrismaClient();

async function main() {
  await seedRiotGames();
  await seedLeagueOfLegends();
  await seedValorant();
  await seedTeamFightTactics();
  await seedWildRift();
  await seedArcane();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
