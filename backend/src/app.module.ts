import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';
import { GamesModule } from './modules/riotgames/games/games.module';
import { EsportsModule } from './modules/riotgames/esports/esports.module';
import { EntertainmentsModule } from './modules/riotgames/entertainments/entertainments.module';
import { ForgeModule } from './modules/riotgames/forge/forge.module';
import { FeaturedNewsModule } from './modules/leagueoflegends/featurednews/featurednews.module';
import { ChooseYourChampionModule } from './modules/leagueoflegends/chooseyourchampion/chooseyourchampion.module';
import { MultipleWaysToPlayModule } from './modules/leagueoflegends/multiplewaystoplay/multiplewaystoplay.module';
import { TheLatestModule } from './modules/valorant/thelatest/thelatest.module';
import { LatestNewsModule } from './modules/teamfighttactics/latestnews/latenews.module';
import { NewsModule } from './modules/wildrift/news/news.module';
import { SliderBannerModule } from './modules/arcane/sliderbanner/sliderbanner.module';
import { CelebrateModule } from './modules/arcane/celebrate/celebrate.module';
import { EpisodeStillsModule } from './modules/arcane/episodestills/episodestills.module';
import { PaPModule } from './modules/arcane/pap/pap.module';
import { CharacterModule } from './modules/arcane/character/character.module';
import { OurGamesModule } from './modules/arcane/ourgames/ourgames.module';

@Module({
  imports: [
    //Riot Games Module
    WhatsHappeningModule,
    GamesModule,
    EsportsModule,
    EntertainmentsModule,
    ForgeModule,

    // League of Legends Module
    FeaturedNewsModule,
    ChooseYourChampionModule,
    MultipleWaysToPlayModule,

    //Valorant Module
    TheLatestModule,

    //Team Fight Tactics Module
    LatestNewsModule,

    //Wild Rifts Module
    NewsModule,

    //Arcane Module
    SliderBannerModule,
    CelebrateModule,
    EpisodeStillsModule,
    PaPModule,
    CharacterModule,
    OurGamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
