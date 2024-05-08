# 全局模块和生命周期

- 对模块添加`@Global`装饰器，来让当前模块变成全局模块
- 注意，全局模块也需要使用`exports`来导出当前模块的Provider（跨模块使用Provider，都需要export）

```ts
@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule { }
```

## 生命周期分为初始化和销毁两个阶段

### 1.初始化

- onModuleInit
- onApplicationBootstrap
- 每一个module中controller、service、module都可以实现这两个方法
- 先遍历每一个module，按照controller、service、module的顺序，执行`onModuleInit方法`（根module最后执行）
- 再遍历每一个module，按照controller、service、module的顺序，执行`onApplicationBootstrap`方法（根module最后执行）

### 2.销毁

- OnModuleDestroy
- BeforeApplicationShutdown
- OnApplicationShutdown
- 每一个module中controller、service、module都可以实现这三个方法
- 先遍历每一个module，按照controller、service、module的顺序，执行`OnModuleDestroy`（根module最后执行）
- 再遍历每一个module，按照controller、service、module的顺序，执行`BeforeApplicationShutdown`方法（根module最后执行）
- 再遍历每一个module，按照controller、service、module的顺序，执行`OnApplicationShutdown`方法（根module最后执行）
