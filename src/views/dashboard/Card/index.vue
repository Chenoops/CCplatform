<template>
  <div>
      <el-row :gutter="10">
          <el-col :span="6">
              <!-- 第一个card -->
              <el-card>
                  <Detail title="总销售额" count="¥ 126560">
                      <template slot="charts">
                          <span>周同比&nbsp;&nbsp;56.67%</span>
                          <!-- svg不放在span内部方便flex垂直居中对齐 -->
                          <svg t="1646211145332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4338" width="16" height="16"><path d="M512 405.333333L298.666667 618.666667h426.666666L512 405.333333z" fill="#d81e06" p-id="4339"></path></svg>
                          <span>日同比&nbsp;&nbsp;19.96%</span>
                          <svg t="1646211175184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5344" width="16" height="16"><path d="M512 618.666667L298.666667 405.333333h426.666666L512 618.666667z" fill="#1afa29" p-id="5345"></path></svg>
                      </template>
                      <template slot="footer">
                          <span>日销售额￥ 12423</span>
                      </template>
                  </Detail>
              </el-card>
          </el-col>
          <el-col :span="6">
              <!-- 第二个card -->
              <el-card>
                  <Detail title="访问量" count="88460">
                      <template slot="charts">
                          <lineCharts></lineCharts>
                      </template>
                      <template slot="footer">
                          <span>日访问量 1234</span>
                      </template>
                  </Detail>
              </el-card>
          </el-col>
          <el-col :span="6">
              <!-- 第三个card -->
              <el-card>
                  <Detail title="支付笔数" count="88460">
                      <template slot="charts">
                          <barCharts></barCharts>
                      </template>
                      <template slot="footer">
                          <span>转换率64%</span>
                      </template>
                  </Detail>
              </el-card>
          </el-col>
          <el-col :span="6">
              <!-- 第四个card -->
              <el-card>
                  <Detail title="运营活动效果" count="78%">
                      <template slot="charts">
                          <progressCharts></progressCharts>
                      </template>
                      <template slot="footer">
                          <span>周同比&nbsp;&nbsp;56.67%</span>
                          <!-- svg不放在span内部方便flex垂直居中对齐 -->
                          <svg t="1646211145332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4338" width="16" height="16"><path d="M512 405.333333L298.666667 618.666667h426.666666L512 405.333333z" fill="#d81e06" p-id="4339"></path></svg>
                          <span>日同比&nbsp;&nbsp;19.96%</span>
                          <svg t="1646211175184" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5344" width="16" height="16"><path d="M512 618.666667L298.666667 405.333333h426.666666L512 618.666667z" fill="#1afa29" p-id="5345"></path></svg>
                      </template>
                  </Detail>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import Detail from './Detail'
import lineCharts from './lineCharts'
import barCharts from './barCharts'
import progressCharts from './progressCharts'
export default {
name: 'card',
components: {
    Detail,
    lineCharts,
    barCharts,
    progressCharts
}
}
</script>

<style>

</style>