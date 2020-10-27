import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ding')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('name')
  getHello(): string {
    return this.appService.getHello();
  }
}

