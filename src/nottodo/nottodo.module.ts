import { Module } from '@nestjs/common';
import { NottodoController } from './controllers/nottodo.controller';
import { NottodoService } from './services/nottodo.service';

@Module({
  controllers: [NottodoController],
  providers: [NottodoService],
})
export class NottodoModule {}
