<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
//引入echarts
import echarts from 'echarts';
export default {
name: 'barCharts',
mounted() {
    //初始化echarts实例
    let barCharts=echarts.init(this.$refs.charts);
    // 配置数据
    barCharts.setOption({
        xAxis: {
            //隐藏x轴
            show: false,
            //均分
            type: 'category',
        },
        yAxis: {
            show: false
        },
        series: [
            {
                type: "bar",
                data: [10, 7, 33, 12, 48, 9,29,10,44,33,22,8],
                color: 'cyan'
            },
        ],
        //布局调试
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        tooltip:{}
    });
}
}
</script>

<style scoped>
.charts {
    width: 100%;
    height: 100%;
}

</style>