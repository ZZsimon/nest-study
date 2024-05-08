import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  // setTimeout(() => {
  //   app.close(); // app.close只是会触发销毁逻辑，不会杀死nest的进程
  // }, 3000);
}
bootstrap();
