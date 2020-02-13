<template>
  <div class="user-login">
    <div style="margin-left:200px">
      <img src="~/static/img/login.png" width="250px" height="100px" />
    </div>
    <el-form ref="form" :model="user" label-width="250px">
      <el-form-item label="学号">
        <el-input v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-input v-model="user.valicode"></el-input>

        <div class="valicode">
          <img src="~/static/img/valicode.png" width="80px" height="60px" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login(1)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setUser } from "@/utils/auth";
import userApi from "@/api/user";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    login(a) {
      userApi.loginByAccount(this.user).then(res => {
        if (res.data.success) {
          this.$message({
            type: "info",
            message: "登录成功"
          });
          //将token信息存入cookie
          console.log(res.data.data)
          setUser(res.data.data.token, res.data.data.name,res.data.data.id);

          //跳转到首页 
         // this.$router.push("/");
          window.location.href="/"
        }else{
          this.$message({
            type: "error",
            message: "用户名或密码错误"
          });
        }
      });
    }
  }
};
</script>
<style>
.valicode {
  float: right;
}
.user-login {
  width: 800px;
  border-radius: 3px;
  border: 1px solid #ebebeb;

  padding: 10px;
  margin-left: 200px;
  margin-top: 10px;
  padding-right: 250px;
}
</style>