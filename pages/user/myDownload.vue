<template>
  <div>
    <ul>
      <li class="user-download" v-for="(o,index) in 4" :key="o">
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
                  <div class="user-download-title">xxxxx软件名称{{index}}</div>
                </el-col>
                <el-col :span="5">
                  <div class="user-download-score">
                    <el-popover placement="top" width="160" trigger="hover">
                      <div class="block">
                        <el-rate v-model="value1"></el-rate>
                      </div>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                      </div>
                      <el-button slot="reference">评分</el-button>
                    </el-popover>
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
      value1: 0
    };
  }
};
</script>
<style>
.card {
  height: 130px;
}
.user-download-score {
  margin-top: 30px;
}
.user-download-title {
  margin-top: 30px;
  font-size: 20px;
}
.user-download {
  margin-top: 8px;
}
</style>