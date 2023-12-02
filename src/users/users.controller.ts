import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUser(@Body() dto: Prisma.UserCreateInput): Promise<User> {
    return this.usersService.createUser(dto);
  }
}
