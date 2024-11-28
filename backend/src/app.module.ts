import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';
import { GamesModule } from './modules/riotgames/games/games.module';
import { EsportsModule } from './modules/riotgames/esports/esports.module';
import { EntertainmentsModule } from './modules/riotgames/entertainments/entertainments.module';
import { FeaturedNewsModule } from './modules/leagueoflegends/featurednews/featurednews.module';
import { ChooseYourChampionModule } from './modules/leagueoflegends/chooseyourchampion/chooseyourchampion.module';
import { MultipleWaysToPlayModule } from './modules/leagueoflegends/multiplewaystoplay/multiplewaystoplay.module';
import { TheLatestModule } from './modules/valorant/thelatest/thelatest.module';

@Module({
  imports: [
    //Riot Games Module
    WhatsHappeningModule,
    GamesModule,
    EsportsModule,
    EntertainmentsModule,

    // League of Legends Module
    FeaturedNewsModule,
    ChooseYourChampionModule,
    MultipleWaysToPlayModule,

    //Valorant Module
    TheLatestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
