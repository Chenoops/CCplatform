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
    let progressCharts=echarts.init(this.$refs.charts);
    // 配置数据
    progressCharts.setOption({
        xAxis: {
            //隐藏x轴
            show: false,
            //最小值与最大值的设置
            min: 0,
            max: 100
        },
        yAxis: {
            // 隐藏y轴
            show: false,
            //均分 横向柱状图 均分放在yAxis
            type: 'category',
        },
        series: [
            {
                //图标形式-柱状图（横向）
                type: "bar",
                data: [78],
                color: 'cyan',
                barWidth: 10,
                color: 'yellowgreen',
                //背景颜色设置前提
                showBackground: true,
                //设置背景颜色
                backgroundStyle: {
                    color: '#eee'
                },
                // 文本标签(文本改为符号 | )
                label: {
                    show: true,
                    //改变文本内容
                    formatter: '|',//默认为文本数字
                    //文本标签位置调试
                    position: 'right',
                }
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