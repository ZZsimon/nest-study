import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 这个是全局中间件
  // app.use((req: Request, res: Response, next: NextFunction) => {
  //   console.log(req.url, 'before');
  //   // next表示下一个中间件
  //   next();
  //   console.log(req.url, 'after');
  // });

  // 使用全局的路由守卫
  // app.useGlobalGuards(new LoginGuard())

  await app.listen(3000);
}
bootstrap();
