import { Module } from '@nestjs/common';
import { EntertainmentsController } from './entertainments.controller';
import { EntertainmentsService } from './entertainments.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EntertainmentsController],
  providers: [EntertainmentsService],
})
export class EntertainmentsModule {}
