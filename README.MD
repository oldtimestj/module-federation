# 基于webpack5 `Module Federation`微前端示例
## 1、Demo基于webpack5的`Module Federation`，其中`all`项目为多引用，可以引用`host`、`remote`和`vue-host`暴露出来的组件。其中`host`和`remote`为`React`项目，`vue-host`为Vue项目。
## 2、项目启动
> **其中引用哪个项目的组件必须启动哪一个项目**
```
npm install
npm run serve
```