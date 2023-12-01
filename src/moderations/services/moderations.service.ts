import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/libs/prisma.service';

@Injectable()
export class ModerationsService {
  constructor(private prisma: PrismaService) {}

  async getModerationById(
    moderationsWhereUniqueInput: Prisma.ModerationsWhereUniqueInput,
  ) {
    return await this.prisma.moderations.findUnique({
      where: moderationsWhereUniqueInput,
    });
  }

  async getModerationsByNottodo(data: Prisma.ModerationsWhereInput) {
    return await this.prisma.moderations.findMany({
      where: data,
    });
  }

  async createModeration(data: Prisma.ModerationsCreateInput) {
    return await this.prisma.moderations.create({
      data,
    });
  }
}
