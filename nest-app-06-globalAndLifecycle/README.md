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
- 先遍历每一个module，按照controller、service、module的顺序，
