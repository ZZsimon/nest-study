import { Injectable, NestMiddleware } from '@nestjs/common';

// 使用Injectable装饰器，表示LogMiddleware这个类的对象可以被注入
@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.url, ' before LogMiddleware')

    next();
    console.log(req.url, ' after LogMiddleware')
  }
}
