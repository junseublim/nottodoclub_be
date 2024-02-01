import { Module } from '@nestjs/common';
import { ModerationsController } from './moderations.controller';
import { ModerationsService } from './moderations.service';
import { NottodoModule } from 'src/nottodo/nottodo.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [NottodoModule, UsersModule, PrismaModule],
  controllers: [ModerationsController],
  providers: [ModerationsService],
})
export class ModerationsModule {}
