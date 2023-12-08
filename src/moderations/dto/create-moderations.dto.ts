import { ApiProperty } from '@nestjs/swagger';

export class CreateModeration {
  @ApiProperty()
  content: string;

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  nottodoId: string;
}
