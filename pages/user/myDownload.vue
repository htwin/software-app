<template>
  <div>
    <ul>
      <li class="user-download" v-for="(item,index) in softList" :key="index">
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
                  <div class="user-download-title">{{item.name}}</div>
                </el-col>
                <el-col :span="5">
                  <div class="user-download-score" v-if="item.isRate==1">
                      <div class="block">
                        我已评分：<el-rate :value="item.rate"></el-rate>
                      </div>
                  </div>
                  <div class="user-download-score" v-else>
                    <el-popover placement="top" width="160" trigger="hover">
                      <div class="block">
                        <el-rate v-model="softList[index].rate" ></el-rate>
                      </div>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="doRate(index)">确定</el-button>
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
import softApi from "@/api/soft";
import { getUser } from "@/utils/auth";
export default {
  data() {
    return {
      value1: 0,
      softIds:"",
      softList:[],
      rate:0
    }
  },
  methods:{
    
    doRate(index){
      
      softApi.doRate(this.softList[index]).then(res=>{
        if(res.data.success){
          this.$message({
            type:"success",
            message:"评分成功"
          })
          this.softList[index].isRate = 1;
        }
      })
    } 
  },
  created(){
    softApi.userDownload(getUser().user_id).then(res=>{
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