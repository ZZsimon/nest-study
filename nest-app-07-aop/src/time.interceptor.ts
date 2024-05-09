import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

// interceptor 是一个拦截器
// 它也被@Injectable()装饰
@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    console.log('before -- next.handle()');

    const startTime = Date.now();

    // 调用 next.handle()之后，表示当前路由已经请求结束
    return next.handle().pipe(
      tap((data) => {
        console.log(data, 'data');

        console.log('time: ', Date.now() - startTime);
      })
    );
  }
}
