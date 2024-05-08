import { Module, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [AaaModule, BbbModule, CccModule, DddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit, OnApplicationBootstrap {
  // 根模块的onModuleInit是所有模块中最后执行的。
  onModuleInit() {
    console.log('AppModule OnModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AppModule OnApplicationBootstrap');
  }
}
