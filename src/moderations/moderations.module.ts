import { Module } from '@nestjs/common';
import { ModerationsController } from './controllers/moderations.controller';
import { ModerationsService } from './services/moderations.service';
import { PrismaService } from 'src/libs/prisma.service';
import { NottodoService } from 'src/nottodo/services/nottodo.service';

@Module({
  controllers: [ModerationsController],
  providers: [ModerationsService, PrismaService, NottodoService],
})
export class ModerationsModule {}
