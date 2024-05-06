import { Controller, Get,Inject } from '@nestjs/common';
import { AppService } from './app.service';
import {OtherService} from './other/other.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject()
  private readonly otherService: OtherService;

  @Get()
  getHello(): string {
    // 为什么这里可以直接调用getHello方法
    // 是因为nest框架在背后做了对象创建和依赖注入的工作
    return `${this.appService.getHello()}----- ${this.otherService.findAll()}`;
  }
}
