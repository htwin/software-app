<template>
  <div>
    <div class="soft-info">
      <el-row>
        <el-col :span="14" class="soft-info-left">
          <div class="soft-info-title">
            <el-row>
              <el-col :span="18">
                <div class="soft-info-name">{{soft.name}}</div>
              </el-col>
              <el-col :span="6">
                <div class="soft-download">
                  <el-button type="primary" size="mini" @click="download(soft.name,soft.url)">下载软件</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="soft-info-summary">
            <el-row :gutter="1">
              <el-col :span="4">
                <a href="#" @click="thumb()">
                  <el-badge :value="soft.thumb" class="item">
                    点赞
                    <el-button type="info" size="mini" icon="el-icon-thumb" circle></el-button>
                  </el-badge>
                </a>
              </el-col>
              <el-col :span="4">
                <el-badge :value="soft.download" class="item">下载数</el-badge>
              </el-col>
              <el-col :span="4">
                <el-badge :value="soft.comment" class="item">评论数</el-badge>
              </el-col>
              <el-col :span="4">
                <a :href="'/tutorial/'+soft.id" style="color:red">安装教程链接</a>
              </el-col>
              <el-col :span="5">
                <el-rate
                  v-model="soft.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>
              </el-col>
            </el-row>
          </div>
          <div class="soft-info-intro">
            <div class="intro-title">
              <span style="padding-left:10px">软件介绍</span>
            </div>

            <div v-html="soft.introduction" class="soft-info-intro-content">
              <!-- 软件介绍内容 -->
            </div>
          </div>
        </el-col>

        <el-col :span="8" class="soft-info-comment">
          <div class="soft-comment-title">
            <el-row>
              <el-col :span="18">
                <div class="soft-comment-area">评论区</div>
              </el-col>
              <el-col :span="6">
                <div class="soft-comment-start">
                  <el-button type="primary" size="mini" @click="toComment()">发表评论</el-button>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="soft-comment-content" v-for="(item,index) in commentList" :key="index">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="comment-username">
                <span>{{item.reviewer}}</span>
                <el-button style="float: right; padding: 3px 0" type="text">回复(10)</el-button>
              </div>
              <div class="text">{{item.content}}</div>
              <div class="comment-time">{{item.createtime|formatDate}}</div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="评论" :visible.sync="dialogFormVisible">
      <el-form :model="comment">
        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="comment.content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addComment()">评论</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import softApi from "@/api/soft";
import commentApi from "@/api/comment";
import userApi from "@/api/user";
import { getUser, setThumb, setDownload } from "@/utils/auth";
import common from "@/utils/common"
import { formatDate } from "@/utils/date.js";
export default {
  data() {
    return {
      value: 3.7,
      dialogFormVisible: false,
      comment: {},
      id: "",
      soft: {},
      page: 1, //评论列表的页码
      pageSize: 5, //评论列表的每次加载的数量
      commentList: []
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
    //点赞软件
    thumb() {
      //登录才可以点赞
      if (getUser().user_name == undefined || getUser().user_name == "") {
        this.$message({
          type: "error",
          message: "请登录"
        });

        return;
      } else {
        //判断用户是否已经点赞该软件
        userApi.getUserSoftThu(getUser().user_id, this.soft.id).then(res => {
          if (res.data.success) {
            if (res.data.data != undefined || res.data.data != null) {
              this.$message({
                type: "info",
                message: "你已经点过赞了！！！"
              });
              return;
            } else {
              userApi.thumb(getUser().user_id, this.soft.id).then(res => {
                if (res.data.success) {
                  this.soft.thumb = this.soft.thumb + 1;
                } else {
                  this.$message({
                    type: "error",
                    message: "系统异常"
                  });
                }
              });
            }
          } else {
            this.$message({
              type: "error",
              message: "系统异常111"
            });
          }
        });
      }
    },
    //下载软件
    download(name, url) {
      //下载软件需要登录权限
      if (getUser().user_name == undefined || getUser().user_name == "") {
        this.$message({
          type: "error",
          message: "请登录"
        });

        return;
      } else {
        //下载软件后期优化
        softApi.downloadFile(name, url).then(res => {
            if (res.headers["content-type"].indexOf("json") === -1) {
              // 返回的数据不是json
              var fileName = name + url.substring(url.lastIndexOf("."));
        
              const url1 = window.URL.createObjectURL(new Blob([res.data]));
              const link = document.createElement("a");
              link.href = url1;
              link.setAttribute("download", fileName);
              document.body.appendChild(link);
              link.click();
              userApi.downloads(getUser().user_id, softId);
            }else{
              //返回的是json
              this.$message({
                type:"error",
                message:"请重新登录"
              })
            }
          });



        userApi.downloads(getUser().user_id, this.soft.id).then(res => {
          if (res.data.success) {
            this.soft.download = this.soft.download + 1;
          }
        });
      }
    },

    toComment() {
      //评论软件需要登录权限
      if (getUser().user_name == undefined || getUser().user_name == "") {
        this.$message({
          type: "error",
          message: "请登录"
        });

        return;
      } else {
        this.dialogFormVisible = true;
      }
    },

    //发表评论
    addComment() {
      this.comment.userId = getUser().user_id;
      this.comment.softwareId = this.soft.id;
      this.comment.parentId = "0";
      this.comment.reviewer = getUser().user_name;

      commentApi.addComment(this.comment).then(res => {
        if (res.data.success) {
          this.$message({
            type: "info",
            message: "评论成功"
          });
          this.soft.comment += 1;
          this.comment = {};
          this.commentList.push(res.data.data);
        } else {
          this.$message({
            type: "info",
            message: "系统错误，请稍后再试"
          });
        }
      });

      this.dialogFormVisible = false;
    }
  },
  created() {
    //根据id查询软件
    this.id = this.$route.params.id;
    softApi.findById(this.id).then(res => {
      this.soft = res.data.data;
    });
    //加载评论列表
    commentApi.search(this.id, 0, this.page, this.pageSize).then(res => {
      this.commentList = res.data.data.rows;
    });
  }
};
</script>
<style>
.soft-info-intro-content {
  margin-top: 10px;
}
.comment-username {
  height: 5px;
}
.comment-time {
  font-size: 12px;
  text-align: right;
}
.text {
  font-size: 14px;
  border-bottom: 1px solid #ebebeb;
}

.soft-comment-content {
  margin-top: 5px;
}
.soft-comment-title {
  border-bottom: 1px solid #ebebeb;
  padding: 5px;
}
.intro-title {
  border-bottom: 1px solid #ebebeb;
}
.soft-info-intro {
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 16px;
  margin-top: 30px;
}
.soft-info-summary {
  padding: 10px;
  text-align: center;
  margin-left: 60px;
}
.soft-info-name {
  padding-top: 3px;
  text-align: center;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 16px;
  margin-left: 60px;
}
.soft-download {
  margin-left: 50px;
  padding: 16px;
}
.soft-info-title {
  text-align: center;
}
.soft-info {
  margin-left: 80px;
  margin-top: 30px;
}
.soft-info-left {
  background-color: white;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 24px;
}
.soft-info-comment {
  margin-left: 50px;
  background-color: white;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  padding: 24px;
}
</style>
