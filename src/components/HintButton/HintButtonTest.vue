<template>
  <h2>自定义带hover提示的按钮</h2>
  <!-- 当用户使用hintbutton时 需要向HintButton组件传递相应的参数 这样可以动态定义组件(el-button进行二次封装) -->
  <!-- @click这里代表的是自定义事件 不是原生的click事件 （也可以用.native）-->
  <HintButton type="success" icon="el-icon-delete" size="mini" @click="handler"></HintButton>
</template>

<script>
import HintButton from './HintButton'
export default {
name: 'HintButtonTest',
compopnents: {
    HintButton
},
methods: {
    // 点击事件的回调
    handler() {
        alert('6666')
    }
}
}
</script>

<style>

</style>