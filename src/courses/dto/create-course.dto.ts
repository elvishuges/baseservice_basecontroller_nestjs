import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  tags: string[];

  @ApiProperty()
  author: string;
}
