<template>
  <div>
    <el-row>
      <el-col :span="16">
        <div class="soft-tutorial">
          <div>
            <el-row>
              <el-col :span="20">
                <div class="soft-tutorial-title"> {{tutorial.softName}}--软件安装教程</div>
              </el-col>
            </el-row>
          </div>

          <div class="video-tutorial">
            <p>视频教程</p>
          </div>
          <div class="video-tutarial-play">
            <video width="500"
              height="300" controls="controls" :src="tutorial.video"></video>
          </div>
          <div class="article-tutorial">
            <p>图文教程</p>
          </div>
          <div>
            <el-row>
              <el-col :span="23">
                <div v-html="tutorial.content" class="article-tutarial-play">
                  <!-- 教程内容 -->
                  <!-- 教程内容 -->
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import tutorialApi from "@/api/tutorial"
export default {
  data(){
    return {
      tutorial:{},
      
    }
  },
  mounted(){
    var softwareId = this.$route.params.tutorial;
    tutorialApi.findBySoftwareId(softwareId).then(res=>{
      if(res.data.data == null){
        
        
       this.$alert('该软件暂时没有教程！！！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.go(-1)
          }
        });
        
       return
        
      }
      this.tutorial = res.data.data;
    })
  }
};
</script>
<style>
.article-tutarial-play {
  border-radius: 3px;
  border: 1px solid #ebebeb;

  padding: 10px;
  margin-left: 50px;
}
.article-tutorial {
  font-size: 19px;
  margin-left: 80px;
  padding: 10px;
  margin-top: 10px;
}
.video-tutarial-play {
  text-align: center;
}
.video-tutorial {
  font-size: 19px;
  margin-left: 80px;
  padding: 10px;
}
.soft-tutorial-title {
  border-radius: 3px;
  border: 1px solid #ebebeb;
  text-align: center;
  padding: 10px;
  margin-left: 150px;
  font-size: 20px;
}
.soft-tutorial {
  padding: 24px;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  margin-left: 200px;
  margin-top: 20px;
}
</style>