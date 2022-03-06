<template>
<!-- 一行有多个按钮 不能用div会变成一行一个 -->
<!-- 用</a>标签来显示title -->
  <a :title="title" style="margin:10px">
      <!-- 下面这种写法 不能用：  v-on不能用@符号替换 -->
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
name: 'HintButton',
props: ['title'],
// mounted() {
//     // $attrs属于组件的一个属性 可以获取到父组件传递过来的props数据
//     // 对于子组件而言 父组件给的数据可以利用props接受，但是需要注意，如果子组件通过props接受的属性，在$attrs属性当中是获取不到的
//     console.log(this.$attrs);
//     // $listeners,他也是组件实例自身的一个属性 它可以获取到父组件传给自组件的自定义事件
//     console.log(this.$listeners);
// }
}
</script>

<style>

</style>