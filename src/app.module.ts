import { Module } from '@nestjs/common';
import { NottodoModule } from './nottodo/nottodo.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, NottodoModule],
})
export class AppModule {}
