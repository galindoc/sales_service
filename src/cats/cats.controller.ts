import { Body, Controller, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body('name') name: string): string {
    return 'This action adds a new cat with name: ' + name;
  }
}
