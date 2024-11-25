import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';
import { GamesModule } from './modules/riotgames/games/games.module';
import { EsportsModule } from './modules/riotgames/esports/esports.module';
import { EntertainmentsModule } from './modules/riotgames/entertainments/entertainments.module';
import { FeaturedNewsModule } from './modules/leagueoflegends/featurednews/featurednews.module';

@Module({
  imports: [
    //Riot Games Module
    WhatsHappeningModule,
    GamesModule,
    EsportsModule,
    EntertainmentsModule,

    // League of Legends Module
    FeaturedNewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
