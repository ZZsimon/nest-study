import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtherModule } from './other/other.module';


// 在nest中，使用Module装饰器的类叫做：模块
// nest用模块来组织整个程序的结构
@Module({
  // 引入了OtherModule，并且OtherModule中还导出了OtherModule中的Provider
  // 这样子，当前这个模块就可以注入Provider，并使用OtherModule中的Provider
  imports: [OtherModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
