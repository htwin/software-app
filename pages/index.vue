<template>
  <div>
    <div class="main">
      <el-row>
        <div>
          <el-col :span="16">
            <el-carousel :interval="4000" type="card" height="450px" style=" padding-top: 50px">
              <el-carousel-item v-for="item in 4" :key="item">
                <a :href="'/software/'+item"><img src="~/static/img/1.jpg" width="100%" height="100%" /></a>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </div>
        <el-col :span="8">
          <div style="margin-left:40px">
            <el-col :span="14">
              <ul>
                <li>
                  <div class="new-soft-list">最新软件</div>
                </li>
                <li v-for="(o,index) in 3" :key="o">
                  <el-card :body-style="{ padding: '0px' }">
                    <a :href="'/software/'+index">
                      <img src="~/static/img/2.jpg" class="image" />
                    </a>
                    <div style="padding: 14px;">
                      <span>好吃的汉堡</span>
                      <div class="bottom clearfix">
                        <time class="time">2020-01-05</time>
                        <el-button type="text" class="button">下载</el-button>
                      </div>
                    </div>
                  </el-card>
                </li>
              </ul>
            </el-col>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <div class="hot-soft-list">推荐软件</div>
        </el-col>

        <el-col :span="4" class="soft-list" v-for="(o,index) in 10" :key="o">
          <el-card :body-style="{ padding: '0px' }">
            <a :href="'/software/'+index">
              <img src="~/static/img/3.jpg" class="image" />
            </a>
            <div style="padding: 14px;">
              <span>photoshop</span>
              <div class="bottom clearfix">
                <time class="time">2020-01-05</time>
                <el-button type="text" class="button">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
<style>
.new-soft-list {
  font-size: 20px;
  font-family: "微软雅黑";
  margin-left: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
}
.hot-soft-list {
  width:800px;
  font-size: 20px;
  font-family: "微软雅黑";
  margin-left: 10px;
  border-bottom: 1px solid #ebebeb;
}
ul li {
  list-style-type: none;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;

  float: right;
}

.image {
  width: 100%;
  height: 105px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.main {
  margin-top: 10px;
  margin-left: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.soft-list {
  margin-top: 20px;
  margin-left: 20px;
}
</style>






