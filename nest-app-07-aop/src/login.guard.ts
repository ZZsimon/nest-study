import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

// 使用Injectable装饰器，表示LoginGuard这个类的对象可以被注入
// 当这个LoginGuard被注入到ioc容器的时候，它也可以把别的Provider注入到自己的类中
@Injectable()
export class LoginGuard implements CanActivate {

  @Inject(AppService)
  private appService: AppService


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('login check');
    console.log('login check', this.appService.getHello());

    return false;
  }
}
