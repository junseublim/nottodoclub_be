import { ApiProperty } from '@nestjs/swagger';

export class CreateNottodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  goal: string;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  userId: number;
}
