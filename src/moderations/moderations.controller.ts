import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateModeration } from './dto';
import { ModerationsService } from './moderations.service';
import { NottodoService } from 'src/nottodo/nottodo.service';
import { UsersService } from 'src/users/users.service';

@Controller('moderations')
export class ModerationsController {
  constructor(
    private moderationsService: ModerationsService,
    private nottodoService: NottodoService,
    private userService: UsersService,
  ) {}

  @Get(':id')
  getModerationById(@Param('id', ParseIntPipe) id) {
    return this.moderationsService.getModerationById({
      id,
    });
  }

  @Get()
  getModerationsByNottodo(@Query('nottodoId', ParseIntPipe) nottodoId) {
    return this.moderationsService.getModerationsByNottodo({
      nottodoId,
    });
  }

  @Post()
  async createModeration(@Body() dto: CreateModeration) {
    const user = await this.userService.getUserById(1);

    return this.moderationsService.createModeration({
      content: dto.content,
      success: dto.success,
      date: new Date(),
      nottodo: {
        connect: {
          id: parseInt(dto.nottodoId),
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    });
  }
}
