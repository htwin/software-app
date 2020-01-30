<template>
  <div>
    <header>
      <el-menu mode="horizontal" text-color="black">
        <el-menu-item>
          <img src="~/static/img/logo.png" width="270px" height="55px" />
        </el-menu-item>

        <el-menu-item>
          <span class="myFont">
            <nuxt-link to="/">首页</nuxt-link>
          </span>
        </el-menu-item>
        <el-menu-item>
          <a href="https://www.ele.me" class="myFont" target="_blank">关于站点</a>
        </el-menu-item>
        <el-menu-item v-if="user_name === ''||user_name===undefined">
          <a href="/login">
            <el-button round class="loginButton">登录</el-button>
          </a>
        </el-menu-item>
        <el-menu-item v-if="user_name !== ''&&user_name!==undefined">
          <div class="loginButton">
            <span class="loginName">
              欢迎您，
              <span style="color:red">{{user_name}}</span>
            </span>&nbsp;&nbsp;&nbsp;
            
              <el-button round @click="logout()">退出等录</el-button>
            
          </div>
        </el-menu-item>
      </el-menu>

      <el-menu :default-active="activeIndex" mode="horizontal" text-color="black">
        <el-menu-item v-for="(item,index) in classifyList" :key="index" :index="index">
          <span class="myFont">
            <a :href="'/classify/'+item.id">{{item.name}}</a>
          </span>
        </el-menu-item>

        <el-menu-item index="5">
          <span class="myFont" style="color:red">
            <a href="/">首页</a>
          </span>
        </el-menu-item>
      </el-menu>
    </header>

    <nuxt />

    <footer>
      <div class="footer">
        <p>软件资源库-----@huangtong版权所有</p>
        <p>如有问题，请联系本人:QQ:XXXXXXXXXX 电话：xxxxxx</p>
      </div>
    </footer>
  </div>
</template>
<script>
import classifyApi from "@/api/classify";
import { getUser, removeUser } from "@/utils/auth";
export default {
  data() {
    return {
      activeIndex: "",
      classifyList: [],
      user_name: ""
    };
  },
  created() {
    this.user_name = getUser().user_name;
  },
  mounted() {
    classifyApi.list().then(res => {
      this.classifyList = res.data.data;
    });
    
  },
  methods: {
    logout() {
      this.$confirm("确认退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeUser();
          window.location.href="/"
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  }
};
</script>

<style>
.loginName {
  margin-top: 10px;
  font-size: 15px;
}
a {
  text-decoration: none;
  color: #333;
}
.footer {
  text-align: center;
  font-size: 15px;
  margin-top: 30px;
}
.loginButton {
  margin-left: 500px;
}
.myFont {
  font-size: 20px;
  margin-left: 20px;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
