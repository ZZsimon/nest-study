# Nest中的各种Provider

所谓的依赖注入，核心就是依赖。那么在nest中依赖可以是以下这些：
- 一个类的实例
- 一个js对象
- 一个通过useFactory函数返回的值（这个值例如是一个js对象）
- useFactory函数有参数，通过inject字段可以往当前useFactory函数的参数中注入其他Provider，这样子，函数体中就可以使用其他Provider
- useFactory还支持异步
- 还可以使用`useExisting`来对provide的值（其实就是Provider的token）进行别名