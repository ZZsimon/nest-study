# Nest框架中的ioc

## 1.为什么使用ioc？

是为了自动处理依赖关系，因此使用了ioc的架构设计。

## 2.如何实现？

在nest中使用Injectable装饰器的类就叫做：Provider

Provider顾名思义就是用来提供的，其实就是这个类中有很多函数可以提供出来

那么，提供出来给谁用呢？那么就是谁将当前这个类注入了，谁就可以使用

```js
// 这就是一个Provider
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

比如Controller就可以注入当前这个Provider
```js
@Controller()
export class AppController {

    // 这一行代码就把AppService这个类注入进来了，同时创建了这个类的一个对象：appService
    // 于是，AppController这个类中就可以使用appService这个对象上的方法了！
    // 为什么可以使用？因为appService的类型是AppService，AppService是一个Provider
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        // 为什么这里可以直接调用getHello方法
        // 是因为nest框架在背后做了对象创建和依赖注入的工作
        return this.appService.getHello();
    }
}

```

同时，在app.module.ts中，我们把这个AppService这个Provider注册进了ioc容器中，因此它可以被Controller注入
```js
@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```


## 3.模块之间Provider的共享
B模块中的Provider可以被B模块导出
```js
@Module({
  controllers: [OtherController],
  providers: [OtherService],
  exports:[OtherService] // 导出当前模块的OtherService这个Provider
})
export class OtherModule {}
```
同时A模块可以Import B模块
```js
@Module({
  // 引入了OtherModule，并且OtherModule中还导出了OtherModule中的Provider
  // 这样子，当前这个模块就可以注入Provider，并使用OtherModule中的Provider
  imports: [OtherModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
