<template>
  <div>
    <div class="main">
      <el-row>
        <div>
          <el-col :span="16">
            <el-carousel :interval="4000" type="card" height="450px" style=" padding-top: 50px">
              <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                <a :href="'/software/'+item.softwareId">
                  <img :src="item.pic" width="100%" height="100%" />
                </a>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </div>
        <el-col :span="8">
          <div style="margin-left:40px">
            <el-col :span="14">
              <ul>
                <li>
                  <div class="new-soft-list">最新软件</div>
                </li>
                <li v-for="(item,index) in newList" :key="index">
                  <el-card :body-style="{ padding: '0px' }">
                    <a :href="'/software/'+item.id">
                      <img :src="item.pic" class="image" />
                    </a>
                    <div style="padding: 14px;">
                      <span>{{item.name}}</span>
                      <div class="bottom clearfix">
                        <time class="time">{{item.createtime|formatDate}}</time>
                        <el-button
                          type="text"
                          class="button"
                          @click="download(item.id,item.name,item.url)"
                        >下载</el-button>
                      </div>
                    </div>
                  </el-card>
                </li>
              </ul>
            </el-col>
          </div>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <div class="hot-soft-list">推荐软件</div>
        </el-col>

        <el-col :span="4" class="soft-list" v-for="(item,index) in hotList" :key="index">
          <el-card :body-style="{ padding: '0px' }">
            <a :href="'/software/'+item.id">
              <img :src="item.pic" class="image" />
            </a>
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <time class="time">{{item.createtime|formatDate}}</time>
                <el-button
                  type="text"
                  class="button"
                  @click="download(item.id,item.name,item.url)"
                >下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import common from "@/utils/common"
import softApi from "@/api/soft";
import carouselApi from "@/api/carousel";
import axios from "axios";
import { getUser } from "@/utils/auth";
import { formatDate } from "@/utils/date.js";
import userApi from "@/api/user";

export default {
  data() {
    return {
      soft: {}
    };
  },
  filters: {
    /*
    时间格式自定义 只需把字符串里面的改成自己所需的格式
   */

    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    download(softId, name, url) {
      //下载软件需要登录权限
      if (getUser().user_name == undefined || getUser().user_name == "") {
        this.$message({
          type: "error",
          message: "请登录"
        });

        return;
      } else {
        common.downloadFile(name,url);
        
      }
    }
  },
  asyncData() {
    return axios
      .all([softApi.newList(1, 3), softApi.hotList(1, 10), carouselApi.list()])
      .then(
        axios.spread(function(newList, hotList, carouselList) {
          return {
            newList: newList.data.data.rows,
            hotList: hotList.data.data.rows,
            carouselList: carouselList.data.data
          };
        })
      );
  }
};
</script>
<style>
.new-soft-list {
  font-size: 20px;
  font-family: "微软雅黑";
  margin-left: 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
}
.hot-soft-list {
  width: 800px;
  font-size: 20px;
  font-family: "微软雅黑";
  margin-left: 10px;
  border-bottom: 1px solid #ebebeb;
}
ul li {
  list-style-type: none;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;

  float: right;
}

.image {
  width: 100%;
  height: 105px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.main {
  margin-top: 10px;
  margin-left: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.soft-list {
  margin-top: 20px;
  margin-left: 20px;
}
</style>






