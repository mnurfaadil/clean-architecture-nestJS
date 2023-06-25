import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): object {
    return {'hello':'world'};
  }

  @Get('hi')
  getHi(): object {
    return {'ping':'pong'};
  }
}
