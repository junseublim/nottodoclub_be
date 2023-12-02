import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NottodoService {
  constructor(private prisma: PrismaService) {}

  async getAllNottodos() {
    return await this.prisma.nottodo.findMany();
  }

  async getNottodosByUser(nottodoWhereInput: Prisma.NottodoWhereInput) {
    return await this.prisma.nottodo.findMany({
      where: nottodoWhereInput,
    });
  }

  async getNottodoById(nottodoWhereInput: Prisma.NottodoWhereUniqueInput) {
    return await this.prisma.nottodo.findUnique({
      where: nottodoWhereInput,
    });
  }

  async createNottodo(data: Prisma.NottodoCreateInput) {
    return await this.prisma.nottodo.create({
      data,
    });
  }

  async updateNottodo(
    data: Prisma.NottodoUpdateInput,
    where: Prisma.NottodoWhereUniqueInput,
  ) {
    return await this.prisma.nottodo.update({
      data,
      where,
    });
  }

  async getUserByNottodoId(where: Prisma.NottodoWhereUniqueInput) {
    return await this.prisma.nottodo
      .findUnique({
        where,
      })
      .user();
  }
}
