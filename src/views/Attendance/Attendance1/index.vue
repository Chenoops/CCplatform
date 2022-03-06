<template>
  <div>
      <el-button type="primary" v-show="this.$store.state.user.buttons.indexOf('btn.Attendance11') != -1">添加按钮11</el-button>
      <el-button type="primary" v-show="this.$store.state.user.buttons.indexOf('btn.Attendance12') != -1">添加按钮12</el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>