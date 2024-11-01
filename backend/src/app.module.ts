import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';
import { GamesModule } from './modules/riotgames/games/games.module';
import { EsportsModule } from './modules/riotgames/esports/esports.module';
import { EntertainmentsModule } from './modules/riotgames/entertainments/entertainments.module';

@Module({
  imports: [
    WhatsHappeningModule,
    GamesModule,
    EsportsModule,
    EntertainmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
