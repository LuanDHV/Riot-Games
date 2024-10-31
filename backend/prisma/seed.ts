import { PrismaClient } from '@prisma/client';
import { whatshappening } from './seed-data/riotgames/whatshappening';
import { games } from './seed-data/riotgames/games';
import { esports } from './seed-data/riotgames/esports';

const prisma = new PrismaClient();

async function main() {
  // Seed data for Riot Games
  for (const item of whatshappening) {
    await prisma.whatsHappening.upsert({
      where: { title: item.title },
      update: item,
      create: item,
    });
  }

  for (const item of games) {
    await prisma.games.upsert({
      where: { launchImg: item.launchImg },
      update: item,
      create: item,
    });
  }

  for (const item of esports) {
    await prisma.esports.upsert({
      where: { img: item.img },
      update: item,
      create: item,
    });
  }

  console.log('Data has been seeded successfully.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
