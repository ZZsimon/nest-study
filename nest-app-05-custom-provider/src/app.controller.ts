import { Controller, Get, Inject } from '@nestjs/common';
import { log } from 'console';
import { AppService } from './app.service';

@Controller()
export class AppController {

  // 通过构造函数参数声明Provider的时候，并且这个Provider的token是这个Provider本身，不需要额外指定token值
  // constructor(private readonly appService: AppService) { }

  constructor() { }

  // 通过Inject装饰器需要给装饰器传递一个参数，这个参数是要注入的Provider的token
  @Inject(AppService)
  private readonly appService: AppService;

  @Inject('appService')
  private readonly appService2: AppService;

  @Inject('person')
  private readonly person: { name: string, age: number };

  @Inject('person2')
  private readonly person2: { name: string, age: number };

  @Inject('person3')
  private readonly person3: { name: string, age: number };

  @Inject('person4')
  private readonly person4: { name: string, age: number };

  @Get()
  getHello(): string {
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    console.log(this.person4);

    return this.appService.getHello();
  }
}
