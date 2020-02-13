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
                <time class="time">{{item.createtime|formatDate}}</time>
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
import { getUser } from "@/utils/auth";
import { formatDate } from '@/utils/date.js'
export default {
  data() {
    return {
      
      pageSize: 10,
      total: 0,
      classifyId:"",
      softList:[],
      page:1,
      searchValue:""
    };
  },
  
  filters: {
   /*
    时间格式自定义 只需把字符串里面的改成自己所需的格式
   */ 
   formatDate(time) {
    var date = new Date(time);
    return formatDate(date, 'yyyy-MM-dd hh:mm:ss'); 
   },
  
  },
  mounted(){
    this.searchValue = this.$route.params.search;
    this.search(this.page,this.pageSize,{name:this.searchValue});
  },
  methods:{
    search(page,size,searchValue){
     softApi.search(page,size,searchValue).then(res=>{
        
     
     if(res.data.data == null){
          this.$message({
              type:"info",
              message:"没有查询到内容"
          })
          this.$router.go(-1)
          return
      }
      this.softList = res.data.data.rows;
      this.total = res.data.data.total;
      if(this.softList.length < 1){
          this.$message({
              type:"info",
              message:"没有查询到内容"
          })
          this.$router.go(-1)
      }
     
      
    })
     
    },
    download(name,url){
       //下载软件需要登录权限
      if (getUser().user_name == undefined || getUser().user_name == "") {
        this.$message({
          type: "error",
          message: "请登录"
        });

        return;
      } else {
        window.location.href =
          "http://localhost:9000/soft/soft/download?name=" +
          name +
          "&url=" +
          url;
      }
    // window.location.href="http://localhost:9000/soft/soft/download?name="+name+"&url="+url;
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