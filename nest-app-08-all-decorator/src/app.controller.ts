import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/ip')
  getHello(@Ip() ip: string): string {
    return ip;
  }
}
