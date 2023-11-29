import { Module } from '@nestjs/common';
import { ModerationController } from './controllers/moderations.controller';
import { ModerationService } from './services/moderation.service';

@Module({
  controllers: [ModerationController],
  providers: [ModerationService],
})
export class NottodoModule {}
