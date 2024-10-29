import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhatsHappeningModule } from './modules/riotgames/whatshappening/whatshappening.module';

@Module({
  imports: [WhatsHappeningModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
