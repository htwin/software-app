<template>
  <div>
    <ul>
      <li class="user-thumb" v-for="(item,index) in softList" :key="index">
        <el-row>
          <el-col :span="24">
            <el-card class="card" shadow="hover">
              <el-row>
                <el-col :span="8">
                  <a :href="'/software/'+item.id">
                    <el-image
                      style="width: 150px; height: 100px"
                      :src="item.pic"
                      :fit="'contain'"
                    ></el-image>
                  </a>
                </el-col>
                <el-col :span="8">
                  <div class="user-thumb-title">{{item.name}}</div>
                </el-col>
                <el-col :span="5">
                  <div class="user-thumb-score">
                    <el-rate
                      v-model="item.score"
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
import softApi from "@/api/soft";
import { getUser } from "@/utils/auth";
export default {
  data() {
    return {
   
      softIds:"",
      softList:[]
    };
  },
  created(){
   
    softApi.userThumb(getUser().user_id).then(res=>{
      this.softList = res.data.data
      console.log(this.softList)
    })
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