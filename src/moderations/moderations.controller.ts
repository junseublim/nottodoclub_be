import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateModeration } from './dto';
import { ModerationsService } from './moderations.service';
import { NottodoService } from 'src/nottodo/nottodo.service';

@Controller('moderations')
export class ModerationsController {
  constructor(
    private moderationsService: ModerationsService,
    private nottodoService: NottodoService,
  ) {}

  @Get(':id')
  getModerationById(@Param('id') id: string) {
    return this.moderationsService.getModerationById({
      id: parseInt(id),
    });
  }

  @Get()
  getModerationByNottodo(@Query('nottodoId') nottodoId: string) {
    return this.moderationsService.getModerationsByNottodo({
      nottodoId: parseInt(nottodoId),
    });
  }

  @Post()
  async createModeration(@Body() dto: CreateModeration) {
    const user = await this.nottodoService.getUserByNottodoId({
      id: parseInt(dto.nottodoId),
    });

    return this.moderationsService.createModeration({
      content: dto.content,
      success: dto.success,
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
