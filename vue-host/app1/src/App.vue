<template>
  <div id="app">
    <Header name="app1"/>
    <h1>远程组件NewsList</h1>
    <NewsList></NewsList>
    <comp></comp>
  </div>
</template>
<script>
import { ReactInVue } from "vuera";
import React from 'react';

import NewsList from './NewList';
// const HelloReact = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import('remoteVar/NewsList').then(res=>{
//     console.log('res', res);
//     return ReactInVue(res.default)
//   }),
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 0,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 3000
// })
import Header from './components/Header.vue'
export default {
  components: {
    Header,
    NewsList,
  }
}

</script>
