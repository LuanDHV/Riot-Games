import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';
import { GamesModule } from './modules/riotgames/games/games.module';

@Module({
  imports: [WhatsHappeningModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
