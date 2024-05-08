import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('AppController hanlder')
    return this.appService.getHello();
  }

  @Get('aaa')
  // 路由守卫这种类型的中间件可以加在特定的路由上
  // 此时，访问/aaa路由时，就会先经过路由守卫来判断是否可以访问/aaa

  // 路由守卫也可以加在全局的路由上
  @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa hanlder')
    return 'aaa'
  }

  @Get('bbb')
  bbb(): string {
    console.log('bbb hanlder')
    return 'bbb'
  }
}
