<template>
  <div>
      <div class="header">
          <span class="search-header">搜索用户数</span>
          <svg t="1646209804868" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="16" height="16"><path d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z" p-id="2044" fill="#8a8a8a"></path></svg>
      </div>
      <div class="main">
          <span class="main-title">12321</span>
          <span class="main-content">17.1</span>
          <svg t="1646211145332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4338" width="16" height="16"><path d="M512 405.333333L298.666667 618.666667h426.666666L512 405.333333z" fill="#d81e06" p-id="4339"></path></svg>
          <svg t="1646211175184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5344" width="16" height="16"><path d="M512 618.666667L298.666667 405.333333h426.666666L512 618.666667z" fill="#1afa29" p-id="5345"></path></svg>
      </div>
      <div class="footer">
          <div class="charts" ref="charts"></div>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
name: 'LineCharts',
mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // 配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        // 'category' 类目轴，适用于离散的类目数据 分布更美观
        type: "category",
      },
      yAxis: {
        //隐藏y轴
        show: false,
      },
      series: [
        {
          type: "line",
          smooth: true,
          data: [10, 7, 33, 12, 48, 9, 29, 10, 44],
          // 拐点样式设置
          itemStyle: {
            opacity: 0,
          },
          //线条的样式
          lineStyle: {
            color: "darkblue",
          },
          //填充颜色设置
          areaStyle: {
            color: {
              // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "darkblue", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      // 布局调试 充满整个区域
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    });
  },
}
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
}
.search-header {
    margin-right: 20px;
}
.main {
    display: flex;
    align-items: center;
    margin: 10px 0px;
}
.main-title {
    margin-right: 30px;
}
.main-content {
    margin-right: 10px;
}
.charts {
    width: 100%;
    height: 50px;
}
</style>