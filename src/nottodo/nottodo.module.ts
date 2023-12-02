import { Module } from '@nestjs/common';
import { NottodoController } from './nottodo.controller';
import { NottodoService } from './nottodo.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NottodoController],
  providers: [NottodoService],
  exports: [NottodoService],
})
export class NottodoModule {}
