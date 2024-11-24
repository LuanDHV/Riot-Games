import { IGames } from 'src/modules/riotgames/types/interface';

export const games: IGames[] = [
  {
    launchImg: '/imgs/riotgames/games/lol-launch.png',
    logotype: '/imgs/riotgames/games/lol-logotype.png',
    platforms: [
      '/imgs/riotgames/games/platforms-window.png',
      '/imgs/riotgames/games/platforms-macos.png',
    ],
    link: '/leagueoflegends',
  },
  {
    launchImg: '/imgs/riotgames/games/valorant-launch.png',
    logotype: '/imgs/riotgames/games/valorant-logotype.png',
    platforms: [
      '/imgs/riotgames/games/platforms-window.png',
      '/imgs/riotgames/games/platforms-playstation.png',
      '/imgs/riotgames/games/platforms-xbox.png',
    ],
    link: '/valorant',
  },
  {
    launchImg: '/imgs/riotgames/games/tft-launch.png',
    logotype: '/imgs/riotgames/games/tft-logotype.png',
    platforms: [
      '/imgs/riotgames/games/platforms-window.png',
      '/imgs/riotgames/games/platforms-macos.png',
      '/imgs/riotgames/games/platforms-phone.png',
    ],
    link: '/teamfighttactics',
  },
  {
    launchImg: '/imgs/riotgames/games/wildrift-launch.png',
    logotype: '/imgs/riotgames/games/wildrift-logotype.png',
    platforms: ['/imgs/riotgames/games/platforms-phone.png'],
    link: '/wildrift',
  },
];
