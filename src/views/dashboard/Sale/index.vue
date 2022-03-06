<template>
  <div>
    <el-card class="box-card" style="margin: 10px 0px">
      <div slot="header" class="clearfix">
        <!--  @tab-click="handleClick" -->
        <!-- 头部左侧内容 -->
        <el-tabs class="tab" v-model="activeName">
          <el-tab-pane label="销售额" name="sale"></el-tab-pane>
          <el-tab-pane label="访问量" name="visit"></el-tab-pane>
        </el-tabs>
        <!-- 头部右侧内容 -->
        <div class="right">
          <span @click="setDay">今日</span>
          <span @click="setWeek">本周</span>
          <span @click="setMonth">本月</span>
          <span @click="setYear">本年</span>
          <!-- value-format日期绑定值的格式 -->
          <el-date-picker
            class="date"
            v-model="date"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="small"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
      </div>
      <div>
        <el-row :gutter="10">
          <el-col :span="18">
            <div class="charts" ref="charts"></div>
          </el-col>
          <el-col :span="6" class="right">
            <h3>门店{{title}}排名</h3>
            <ul>
              <li>
                <span class="rindex">1</span>
                <span>肯德基</span>
                <span class="rvalue">323.243</span> 
              </li>
              <li>
                <span class="rindex">2</span>
                <span>麦当劳</span>
                <span class="rvalue">299.132</span>
              </li>
              <li>
                <span class="rindex">3</span>
                <span>海底捞</span>
                <span class="rvalue">283.998</span>
              </li>
              <li>
                <span>4</span>
                <span>喜茶</span>
                <span class="rvalue">266.223</span>
              </li>
              <li>
                <span>5</span>
                <span>小龙坎</span>
                <span class="rvalue">223.445</span>
              </li>
              <li>
                <span>6</span>
                <span>汉堡王</span>
                <span class="rvalue">219.663</span>
              </li>
              <li>
                <span>7</span>
                <span>西贝莜面村</span>
                <span class="rvalue">200.997</span>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
import dayjs from 'dayjs';
import {mapState} from 'vuex'
export default {
  name: "Sale",
  data() {
    return {
      activeName: "sale",
      mycharts: null,
      //收集日历数据
      date: [],
    };
  },
  mounted() {
    // 初始化echarts实例 把echarts实例挂载到组件实例上 让watch可以使用
    this.mycharts = echarts.init(this.$refs.charts);
    // 配置实例
    this.mycharts.setOption({
      title: {
        text: this.title+'趋势'
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: [],
          color: 'yellowgreen'
        },
      ],
    });
  },
  computed: {
    // 计算属性-标题
    title() {
      return this.activeName=='sale' ? '销售额':'访问量'
    },
    ...mapState({
      // 一定是state.home.list
      listState: state=>state.home.list
    })
  },
  // 监听属性
  watch: {
    // title一变化
    title() {
      // 图标配置数据可以再次修改 新的数据可以覆盖之前的 没有新的数据就不会替换
      this.mycharts.setOption({
        // 只需要覆盖标题
        title: {
          text: this.title+'趋势'
        },
        xAxis: {
          data: this.title=="销售额" ? this.listState.orderFullYearAxis:this.listState.userFullYearAxis
        },
        series: [
          {
            data: this.title=="销售额" ? this.listState.orderFullYear:this.listState.userFullYear
          }
        ]
      })
    },
    // 监听listState属性 一拿到就默认展示销售额数据
    listState() {
      this.mycharts.setOption({
      title: {
        text: this.title+'趋势'
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: this.listState.orderFullYearAxis,
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Direct",
          type: "bar",
          barWidth: "60%",
          data: this.listState.orderFullYear,
          color: 'yellowgreen'
        },
      ],
    });
    }
  },
  methods: {
    //本天
    setDay() {
      // const day = dayjs().format("yyyy-MM-dd");
      // 格式一定要大写？？？？
      const day=dayjs().format('YYYY-MM-DD');
      this.date=[day,day]
    },
    // 本周
    setWeek() {
      const start =dayjs().day(1).format('YYYY-MM-DD')
      const end =dayjs().day(7).format('YYYY-MM-DD')
      // const start =dayjs().startOf('week').format('YYYY-MM-DD') 国外的一周第一天是周日
      // const end =dayjs().endOf('week').format('YYYY-MM-DD') 
      this.date=[start,end]
    },
    // 本月
    setMonth() {
      const start =dayjs().startOf('month').format('YYYY-MM-DD')
      const end =dayjs().endOf('month').format('YYYY-MM-DD')
      this.date=[start,end]
    },
    // 本年
    setYear() {
      const start =dayjs().startOf('year').format('YYYY-MM-DD')
      const end =dayjs().endOf('year').format('YYYY-MM-DD')
      this.date=[start,end]
    }
  }
};
</script>

<style scoped>
/* 修改elementUI的el-card的样式 深度选择器 */
>>> .el-card__header {
  border-bottom: none;
}
.clearfix {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tab {
  width: 100%;
}
.right {
  position: absolute;
  right: 0px;
}
.right span {
  margin: 0px 10px;
}
.date {
  width: 250px;
  margin: 0px 20px;
}
.charts {
  width: 100%;
  height: 300px;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}
ul li {
  height: 8%;
  margin: 10px 0px;
}
.rindex {
  float: left;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  color: #fff;
  background-color: black;
  text-align: center;
}
.rvalue {
  float: right;
}
</style>