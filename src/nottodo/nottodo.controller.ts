import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNottodoDto, UpdateNottodoDto } from './dto';
import { NottodoService } from './nottodo.service';

@Controller('nottodo')
export class NottodoController {
  constructor(private nottodoService: NottodoService) {}

  @Get()
  getNottodosByUser(@Query('userId', ParseIntPipe) userId) {
    return this.nottodoService.getNottodosByUser({
      userId,
    });
  }

  @Get(':id')
  getNottodoById(@Param('id', ParseIntPipe) id) {
    return this.nottodoService.getNottodoById({
      id,
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
