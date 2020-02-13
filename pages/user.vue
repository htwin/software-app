<template>
  <div class="user-container">
    <el-container>
      <el-header>
        <div class="user-header">
          <i class="el-icon-user"></i>个人主页
        </div>
      </el-header>
      <el-container>
        <el-aside width="150px">
          <div class="user-aside">
            <ul>
              <li>
                <el-link type="primary"  :href="'/user?id='+user.id">个人信息</el-link>
              </li>
              <li>
                <el-link type="primary" href="/user/myThumb">我的点赞</el-link>
              </li>
              <li>
                <el-link type="primary" href="/user/myDownload">我的下载</el-link>
              </li>
            </ul>
          </div>
        </el-aside>
        <el-main>
          <div class="user-info"> 
              <nuxt-child/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import userApi from "@/api/user"
import {getUser} from "@/utils/auth"
export default {
  data(){
    return{
      user:{
        id:getUser().user_id,
        name:getUser().user_name,
        thumb:getUser().user_thumb,
        download:getUser().user_download
      }
    }
  },
 
  created(){
   
  }
};
</script>
<style>
.user-aside {
  margin-right: 40px;
  line-height: 50px;
  font-size: 17px;
}
.user-aside ul li {
  border-bottom: 1px solid #ebebeb;
}
.user-container {
  width: 1000px;
  margin-left: 150px;
  margin-top: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
}
.user-header {
  border-bottom: 1px solid #ebebeb;
  font-size: 20px;
  padding: 20px;
}

.el-aside {
  border: 1px solid #ebebeb;
  text-align: center;
}

.el-main {
  border: 1px solid #ebebeb;
  color: #333;
}
ul li {
  list-style-type: none;
}
.user-info-intro ul li {
  margin: 5px;
}
</style>