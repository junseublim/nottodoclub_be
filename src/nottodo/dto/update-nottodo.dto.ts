import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateNottodoDto {
  @ApiProperty()
  id: number;

  @ApiPropertyOptional()
  title?: string;

  @ApiPropertyOptional()
  goal?: string;

  @ApiPropertyOptional()
  startDate?: string;

  @ApiPropertyOptional()
  endDate?: string;
}
