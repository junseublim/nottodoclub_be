import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(@Body() data: Prisma.UserCreateInput) {
    const isUserExist = await this.checkUserNameExist(data.username);

    if (isUserExist) {
      throw 'Username Already Exists';
    }

    const user = await this.saveUser(data);
    return user;
  }

  private async checkUserNameExist(username: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    return !!user;
  }

  private saveUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }
}
