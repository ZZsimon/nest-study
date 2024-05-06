import { Injectable } from '@nestjs/common';

// 在nest中使用Injectable装饰器的类就叫做：Provider
// Provider顾名思义就是用来提供的，其实就是这个类中有很多函数可以提供出来
// 那么，提供出来给谁用呢？那么就是谁将当前这个类注入了，谁就可以使用
// 比如Controller就可以注入当前这个Provider
/**
 * 
  @Controller()
  export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
      // 为什么这里可以直接调用getHello方法
      // 是因为nest框架在背后做了对象创建和依赖注入的工作
      return this.appService.getHello();
    }
  }
 * 
 */

// constructor(private readonly appService: AppService) {}
// 这一行代码就把AppService这个类注入进来了，同时创建了这个类的一个对象：appService
// 于是，AppController这个类中就可以使用appService这个对象上的方法了！
// 为什么可以使用？因为appService的类型是AppService，AppService是一个Provider
// 同时，在app.module.ts中，我们把这个Provider注册进了ioc容器中，因此它可以被Controller注入
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}