import { Module } from '@nestjs/common';
import { NottodoController } from './nottodo.controller';
import { NottodoService } from './nottodo.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [NottodoController],
  providers: [NottodoService],
  exports: [NottodoService],
})
export class NottodoModule {}
