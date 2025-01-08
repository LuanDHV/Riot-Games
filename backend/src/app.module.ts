import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as RiotGamesModules from './modules/riotgames';
import * as LeagueOfLegendsModules from './modules/leagueoflegends';
import * as ValorantModules from './modules/valorant';
import * as TeamFightTacticsModules from './modules/teamfighttactics';
import * as WildRiftModules from './modules/wildrift';
import * as ArcaneModules from './modules/arcane';
import * as RiotMerchModules from './modules/riotmerch';

@Module({
  imports: [
    //Riot Games Module
    RiotGamesModules.WhatsHappeningModule,
    RiotGamesModules.GamesModule,
    RiotGamesModules.EsportsModule,
    RiotGamesModules.EntertainmentsModule,
    RiotGamesModules.ForgeModule,

    // League of Legends Module
    LeagueOfLegendsModules.FeaturedNewsModule,
    LeagueOfLegendsModules.ChooseYourChampionModule,
    LeagueOfLegendsModules.MultipleWaysToPlayModule,

    //Valorant Module
    ValorantModules.TheLatestModule,

    //Team Fight Tactics Module
    TeamFightTacticsModules.LatestNewsModule,

    //Wild Rifts Module
    WildRiftModules.NewsModule,

    //Arcane Module
    ArcaneModules.SliderBannerModule,
    ArcaneModules.CelebrateModule,
    ArcaneModules.EpisodeStillsModule,
    ArcaneModules.PaPModule,
    ArcaneModules.CharacterModule,
    ArcaneModules.OurGamesModule,

    //Riot Merch Module
    RiotMerchModules.BannerModule,
    RiotMerchModules.LatestCollaborationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
