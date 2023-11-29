import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import {
  GetNottodoByIdDto,
  GetNottodosByUserDto,
  UpsertNottodoDto,
} from './dto';

@Controller('nottodo')
export class NottodoController {
  @Get()
  getNottodosByUser(@Body() dto: GetNottodosByUserDto) {
    return dto.username;
  }

  @Get(':id')
  getNottodoById(@Body() dto: GetNottodoByIdDto) {
    return dto.id;
  }

  @Post()
  createNottodo(@Body() dto: UpsertNottodoDto) {
    return dto.title;
  }

  @Put()
  updateNottodo(@Body() dto: UpsertNottodoDto) {
    return dto.title;
  }
}
