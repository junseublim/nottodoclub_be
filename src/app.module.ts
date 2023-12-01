import { Module } from '@nestjs/common';
import { NottodoModule } from './nottodo/nottodo.module';
import { UsersModule } from './users/users.module';
import { ModerationsModule } from './moderations/moderations.module';

@Module({
  imports: [UsersModule, NottodoModule, ModerationsModule],
})
export class AppModule {}
