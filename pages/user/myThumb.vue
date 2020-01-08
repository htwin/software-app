<template>
  <div>
    <ul>
      <li class="user-thumb" v-for="(o,index) in 4" :key="o">
        <el-row>
          <el-col :span="24">
            <el-card class="card" shadow="hover">
              <el-row>
                <el-col :span="8">
                  <a href="/software/1">
                    <el-image
                      style="width: 150px; height: 100px"
                      :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
                      :fit="'contain'"
                    ></el-image>
                  </a>
                </el-col>
                <el-col :span="8">
                  <div class="user-thumb-title">xxxxx软件名称{{index}}</div>
                </el-col>
                <el-col :span="5">
                  <div class="user-thumb-score">
                    <el-rate
                      v-model="value"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    ></el-rate>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3.7
    };
  }
};
</script>
<style>
.card {
  height: 130px;
}
.user-thumb-score {
  margin-top: 30px;
}
.user-thumb-title {
  margin-top: 30px;
  font-size: 20px;
}
.user-thumb {
  margin-top: 8px;
}
</style>