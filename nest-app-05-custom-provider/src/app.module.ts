import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  // AppModule是一个根模块
  // 这里给providers传递了AppService，nest就会把这个服务注册到ioc容器中
  // 只要在Controller类的构造函数的参数中声明了AppService这个依赖
  // nest就会将这个服务注入到Controller这个类中
  // providers: [AppService],

  // 其实，这是一种简写。
  // 完整的应该是这样：
  providers: [
    {
      // provide用来指定token，通过useClass指定对象的类
      provide: AppService,
      useClass: AppService
    },

    {
      // provide也可以是一个字符串，通过useClass指定对象的类
      provide: 'appService',
      useClass: AppService
    },

    {
      // provide是一个字符串
      // 提供一个js对象，而不是一个js类
      provide: 'person',
      useValue: { name: 'Mike', age: 14 }
    },

    {
      // provide是一个字符串
      // 提供的值是会变化的，可能不是一个固定值
      provide: 'person2',
      useFactory() {
        return { name: 'Bob', age: 22 }
      },
    },

    {
      // 使用useFactory作为Provider的值的时候，还可以将其他provider的值通过参数传递到函数体中
      // 只要添加inject字段就可以，inject的值是一个数组，这个数组中每一个值都是其他Provider的token
      provide: 'person3',
      useFactory(person2: { name: string, age: number }, person: { name: string, age: number }) {
        return { name: person2.name, age: person.age }
      },
      inject: ['person2', 'person']
    },

    {
      // useFactory还支持异步
      provide: 'person4',
      async useFactory(person2: { name: string, age: number }, person: { name: string, age: number }) {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        })

        return { name: person2.name, age: person.age }
      },
      inject: ['person2', 'person']
    },

  ]
})
export class AppModule { }
