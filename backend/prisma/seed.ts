import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const whatshappening = [
  {
    title: 'Watch, Play, Experience: Here’s How We’re Celebrating Arcane...',
    icon: '/imgs/riotgames/whatshappening/arcane-icon.png',
    image: '/imgs/riotgames/whatshappening/thumb1.png',
    link: '#',
  },
  {
    title: 'Heavy Is The Crown ft. Linkin Park',
    icon: '/imgs/riotgames/whatshappening/leagueoflegends-icon.png',
    image: '/imgs/riotgames/whatshappening/thumb2.png',
    link: '#',
  },
  {
    title: 'LoL Player Days',
    icon: '/imgs/riotgames/whatshappening/leagueoflegends-icon.png',
    image: '/imgs/riotgames/whatshappening/thumb3.png',
    link: '#',
  },
  {
    title: 'LoL Player Days',
    icon: '/imgs/riotgames/whatshappening/valorant-icon.png',
    image: '/imgs/riotgames/whatshappening/thumb4.png',
    link: '#',
  },
  {
    title: 'Worlds 2024 | Make Them Believe',
    icon: '/imgs/riotgames/whatshappening/leagueoflegends-icon.png',
    image: '/imgs/riotgames/whatshappening/thumb5.png',
    link: '#',
  },
];

async function main() {
  for (const item of whatshappening) {
    await prisma.whatsHappening.create({
      data: item,
    });
  }
  console.log('Data has been seeded successfully.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
