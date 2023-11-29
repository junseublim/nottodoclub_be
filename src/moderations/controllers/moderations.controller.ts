import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  GetModerationByIdDto,
  GetModerationsByNottodoDto,
  UpsertModeration,
} from './dto';

@Controller('moderations')
export class ModerationController {
  @Get(':id')
  getModerationById(@Param() dto: GetModerationByIdDto) {
    return dto.id;
  }

  @Get()
  getModerationByNottodo(@Query() dto: GetModerationsByNottodoDto) {
    return dto.nottodoId;
  }

  @Post()
  createModeration(@Body() dto: UpsertModeration) {
    return dto.content;
  }

  @Put()
  upsertModeration(@Body() dto: UpsertModeration) {
    return dto.content;
  }
}
