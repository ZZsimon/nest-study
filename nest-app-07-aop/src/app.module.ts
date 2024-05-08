import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';
import { LoginGuard } from './login.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    // LoginGuard是一个被@Injectable()装饰器装饰的类
    // 因此，它就是一个Provider，因此可以放到ioc容器中
    // 它的token，nest框架已经帮我们定义好了，叫做APP_GUARD，也就是“APP_GUARD”
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard
    // }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 表示只要是aaa开头的路由都需要使用到LogMiddleware这个中间件
    consumer.apply(LogMiddleware).forRoutes('aaa*')
  };
}
