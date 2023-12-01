import { Module } from '@nestjs/common';
import { NottodoController } from './controllers/nottodo.controller';
import { NottodoService } from './services/nottodo.service';
import { PrismaService } from 'src/libs/prisma.service';

@Module({
  controllers: [NottodoController],
  providers: [NottodoService, PrismaService],
  exports: [NottodoService],
})
export class NottodoModule {}
