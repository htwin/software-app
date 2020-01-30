<template>
  <div>
    <div style="margin-left:80px">
      <el-row :gutter="20">
        <el-col
          :span="4"
          class="soft-list"
          v-for="(item,index) in softList"
          :key="index"
          :offset="index > 0 ? 0 : 0"
        >
          <el-card :body-style="{ padding: '0px' }">
            <a :href="'/software/'+item.id"><img :src="item.pic" class="image" /></a>
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">2020-01-05</time>
                <el-button type="text" class="button" @click="download(item.name,item.url)">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top:30px;text-align:center">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize"></el-pagination>
    </div>
  </div>
</template>
<script>
import "~/assets/style.css";
import softApi from '@/api/soft'
export default {
  data() {
    return {
      pageSize: 10,
      total: 30,
      classifyId:"",
      softList:[],
      page:1
    };
  },
  mounted(){
    this.classifyId = this.$route.params.classify;
    this.findByClassifyId(this.classifyId,this.page,this.pageSize);
  },
  methods:{
    findByClassifyId(classifyId,page,size){
      softApi.findByClassifyId(classifyId,page,size).then(res=>{
        
        this.softList = res.data.data.rows;
        this.total = res.data.data.total;
      
      })
    },
    download(name,url){
     window.location.href="http://localhost:9000/soft/soft/download?name="+name+"&url="+url;
    }
  },
  // asyncData({params}) {
  //     console.log(params.classify)
  //     return softApi.findByClassifyId(params.classify,1,10).then(res=>{
  //       return {softList:res.data.data.rows}
  //     })
  // }

};
</script>