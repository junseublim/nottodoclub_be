import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNottodoDto, UpdateNottodoDto } from './dto';
import { Prisma } from '@prisma/client';
import { NottodoService } from '../services/nottodo.service';

@Controller('nottodo')
export class NottodoController {
  constructor(private nottodoService: NottodoService) {}

  @Get()
  getNottodosByUser(@Query('userId') userId: string) {
    return this.nottodoService.getNottodosByUser({
      userId: parseInt(userId),
    });
  }

  @Get('all')
  getAllNottodos() {
    return this.nottodoService.getAllNottodos();
  }

  @Get(':id')
  getNottodoById(@Param('id') id: string) {
    return this.nottodoService.getNottodoById({
      id: parseInt(id),
    });
  }

  @Post()
  createNottodo(@Body() dto: CreateNottodoDto) {
    return this.nottodoService.createNottodo({
      title: dto.title,
      goal: dto.goal,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      user: {
        connect: { id: dto.userId },
      },
    });
  }

  @Put()
  updateNottodo(@Body() dto: UpdateNottodoDto) {
    return this.nottodoService.updateNottodo(
      {
        title: dto.title,
        goal: dto.goal,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
      },
      {
        id: dto.id,
      },
    );
  }
}
