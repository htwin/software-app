<template>
  <div>
    <el-row>
      <el-col :span="4">
        <div>
          <img src="~/static/img/header.jpg" width="100px" height="100px" />
        </div>
      </el-col>
      <el-col :span="18">
        <div class="user-info-intro">
          <div>
            <ul>
              <li>姓名:{{user.name}}</li>
              <li>年龄:{{user.age}}</li>
              <li>性别:{{user.sex === 1?'男':'女'}}</li>
              
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import userApi from "@/api/user"
export default {
  data(){
    return{
      user:{}
    }
  },
 
  created(){
    
    this.user.id = this.$route.query.id;
    userApi.findById(this.user.id).then(res=>{
     
      this.user = res.data.data
     
    })
  }
}
</script>