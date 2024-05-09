import { Controller, Get, UseGuards, Query, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { UseInterceptors } from '@nestjs/common/decorators/core/use-interceptors.decorator';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilterFilter } from './test-filter.filter';

@Controller()
// @UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    console.log('AppController hanlder');
    return this.appService.getHello();
  }

  @Get('aaa')
  // 路由守卫这种类型的中间件可以加在特定的路由上
  // 此时，访问/aaa路由时，就会先经过路由守卫来判断是否可以访问/aaa

  // 路由守卫也可以加在全局的路由上
  // @UseGuards(LoginGuard)
  aaa(): string {
    console.log('aaa hanlder');
    return 'aaa';
  }


  @Get('bbb')
  // @UseGuards(LoginGuard)
  @UseInterceptors(TimeInterceptor)
  bbb(): string {
    console.log('bbb hanlder');
    return 'bbb';
  }

  @Get('ccc')
  @UseFilters(TestFilterFilter)
  ccc(@Query('age', ValidatePipe) age: number): number {
    console.log(typeof age, 'typeof age');
    console.log(age, '-- age');
    return age + 1;
  }
}
