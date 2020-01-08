<template>
  <div>
    <div class="soft-info">
      <el-row>
        <el-col :span="14" class="soft-info-left">
          <div class="soft-info-title">
            <el-row>
              <el-col :span="18">
                <div class="soft-info-name">软件名称</div>
              </el-col>
              <el-col :span="6">
                <div class="soft-download">
                  <el-button type="primary" size="mini">下载软件</el-button>
                </div>
              </el-col>
            </el-row>
            
          </div>
          <div class="soft-info-summary">
            <el-row :gutter="1">
              <el-col :span="4">
                <el-badge :value="12" class="item">
                  点赞
                </el-badge>
              </el-col>
              <el-col :span="4">
                   <el-badge :value="12" class="item">
                  下载
                </el-badge>
              </el-col>
              <el-col :span="4">
                   <el-badge :value="12" class="item">
                  评论
                </el-badge>
              </el-col>
              <el-col :span="4">
                  <a href="/tutorial/1" style="color:red">安装教程链接</a>
                  </el-col>
              <el-col :span="5">
                <el-rate
                  v-model="value"
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

            <div class="soft-info-intro-content">
              <p
                style="margin-top: 0px; margin-bottom: 0px; padding: 0px; overflow: hidden; zoom: 1; font-size: 14px; line-height: 26px; max-height: 72px;"
              >道词典官方下载版是网易有道出品的一款很小很强大的翻译软件，通过独创的网络释义功能，轻松囊括互联网上的流行词汇与海量例句，支持中英日韩法多语种翻译，目前已经有超过8000万用户使用。有道词典官方下载版具有多国语言发音功能，日韩法语全部标准朗读。有道词典通过网络查询最新翻译，无限容量词库囊括最新中外文词汇，翻译永不过时。在翻译框内输入网址点击翻译，即可得到翻译后的该网址页面。我们日常生活最常接触外国语言，遇到不懂的生词的时候，有了有道词典官方下载版，再也不用忧愁！</p>
              <p>
                <a
                  href="http://xiazai.zol.com.cn/down.php?softid=313019&subcateid=50&site=10&checkStr=e8cb4c697f67a460b&pos=info_main"
                  class="button downLoad-button"
                  style="color: rgb(51, 51, 51); text-decoration-line: none; background: url(&quot;//icon.zol-img.com.cn/xiazai/new/xiazaiDetailButton-bg_v1.png?v1&quot;) 0px -140px no-repeat rgb(39, 149, 69); position: relative; display: block; width: 266px; height: 62px; overflow: hidden;"
                >
                  <span
                    class="text"
                    style="filter: none; display: inline-block; position: absolute; left: 87px; top: 8px; width: 149px; height: 26px; color: rgb(255, 255, 255); line-height: 26px; cursor: pointer;"
                  >
                    <span
                      class="text-icon"
                      style="background: url(&quot;//icon.zol-img.com.cn/xiazai/new/xiazaiDetailButton-bg_v1.png?v1&quot;) -270px -60px no-repeat; position: absolute; top: 0px; left: 0px; width: 149px; height: 26px; font-size: 22px;"
                    ></span>
                    <span style="font-size: 24px;"></span>
                  </span>
                  <span
                    class="dnum"
                    style="display: inline-block; position: absolute; left: 87px; top: 36px; color: rgb(255, 255, 255); font-family: Arial; line-height: 16px;"
                  >需优先下载高速下载器</span>
                </a>
              </p>
              <h2 class="section-title" style="margin: 0px; padding: 0px; font-size: 16px;">有道词典软件特性</h2>
              <p
                style="margin-top: 0px; margin-bottom: 0px; padding: 0px; overflow: hidden; zoom: 1; font-size: 14px; line-height: 26px;"
              >
                <strong>有道词典</strong>是网易有道出品的一款很小很强大的翻译软件，通过独创的网络释义功能，轻松囊括互联网上的流行词汇与海量例句，支持中英日韩法多语种翻译，目前已经有超过8000万用户使用。ZOL提供
                <strong>有道词典</strong>官方下载。
                <br />
                <br />
                <strong>有道词典</strong>，多语种网络词典
                <br />具有多国语言发音功能，日韩法语全部标准朗读。
                <br />通过网络查询最新翻译，无限容量词库囊括最新中外文词汇，翻译永不过时。
                <br />在翻译框内输入网址点击翻译，即可得到翻译后的该网址页面。
                <br />
                <br />
                <strong>有道词典</strong>，海量的免费词典
                <br />完整收录《21世纪大英汉词典》《新汉英大辞典》等多部专业权威词典。
                <br />拥有超过200万条的海量例句，提供各种语境下的例句用法，轻松掌握词汇&amp;160;。
                <br />
                <br />地道的影音词，
                <br />全新音视频例句，收录国际名校公开课以及欧美经典、英语广播的音视频例句。
                <br />标准清晰的纯正英文语音朗读示范，自动发音功能实现边看边听，帮助记忆&amp;160;。
                <br />
                <br />贴心实用的词典
                <br />随时添加单词，与服务器保持实时同步，背单词更容易。
                <br />可选择小巧轻便的迷你窗口，查词体验更流畅。
                <br />支持多款浏览器下取词，支持各类常见软件、图片、PDF文档中强力智能屏幕取词。
                <br />双语例句逐词释义，翻译句子实现逐句对照。
                <br />&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <h3 class="section-title" style="margin: 0px; padding: 0px; font-size: 16px;">有道词典更新日志</h3>
              <p
                style="margin-top: 0px; margin-bottom: 0px; padding: 0px; overflow: hidden; zoom: 1; font-size: 14px; line-height: 26px;"
              >
                <strong>有道词典更新日志：</strong>
                <br />
                <br />
                <br />有道词典8.5.3.0
                <br />更新本地词库
                <br />
                <br />有道词典7.1.0.0421正式版
                <br />提升查单词和例句速度
                <br />支持默认单词本分类和在查词结果中编辑单词本
                <br />增加秒懂释义
                <br />支持精品课功能
                <br />在错误单词提示中显示单词释义
                <br />进一步修复了部分用户遇到的网络连接失败问题
                <br />修复了部分用户的发音延迟问题
                <br />部分快捷键改进，如mini窗口快捷键支持打开和关闭mini窗口
                <br />其他若干bug的修复
                <br />
                <br />有道词典V5.4 正式版
                <br />优化单词本用户体验
                <br />修复单词本bug
                <br />
                <br />有道词典V5.3 正式版 （2012年11月22日）
                <br />新增《柯林斯英汉双解大词典》，词条数大幅增加
                <br />优化柯林斯词典视觉样式
                <br />调整柯林斯词典、21世纪大英汉词典位置，合并为权威词典
                <br />
                <br />有道词典V5.1.36.1244 （2012年7月5日）
                <br />新增英美发音数据
                <br />新增英美音标
                <br />优化了PDF取词功能
                <br />
                <br />有道词典V5.0 正式版 （2011年2月29日）
                <br />优化查询性能，提升查词体验
                <br />优化界面
                <br />
                <br />有道词典5.0 beta版
                <br />新增《柯林斯COBUILD高级英汉双解词典》，解释更权威地道
                <br />新增专业释义
                <br />新增图片词典
                <br />新增同根词
                <br />推出有道学堂服务
                <br />优化了拼写建议服务
                <br />优化了产品布局和视觉设计
                <br />新增每日推荐内容
                <br />丰富了起始页英语学习内容
                <br />修复了单词本同步bug
                <br />
                <br />有道词典V4.4 正式版
                <br />返回页顶新增了用户添加释义和报错功能
                <br />优化了查词历史删除功能
                <br />优化了网络查询和下载模块，增强了系统稳定性
                <br />优化了第一次划词的响应速度
                <br />升级了起始页，增加了每日英语的图片、题目解析功能、查看历史等功能
                <br />
                <br />有道词典V4.4 Beta版 （2011年9月5日）
                <br />新增了用户添加释义和报错功能
                <br />优化了查词历史删除功能
                <br />优化了网络查询和下载模块，增强了系统稳定性
                <br />
                <br />有道词典4.3 正式版
                <br />新增了Firefox 4、5取词功能
                <br />全面升级单词本
                <br />单词本增加了记忆曲线背单词功能，卡片模式浏览等贴心功能
                <br />新增了离线例句、词组短语查询功能
                <br />大幅增加离线本地词库词条量
                <br />增加断网提示，和断网再联后的下载增强版提示
                <br />
                <br />有道词典4.3beta版主要更新：
                <br />单词本界面优化
                <br />单词本增加背单词功能
                <br />单词本增加卡片模式浏览功能
              </p>
              <p>
                <br />
              </p>
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
                  <el-button type="primary" size="mini" @click="dialogFormVisible = true">发表评论</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="soft-comment-content">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="comment-username">
                <span>用户名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">回复(10)</el-button>
              </div>
              <div class="text">
                评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论
                评论内容评论内容评论内容评论内容内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
              </div>
              <div class="comment-time">2020.01.06 11:12 53</div>
            </el-card>
          </div>
          <div class="soft-comment-content">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="comment-username">
                <span>用户名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">回复(10)</el-button>
              </div>
              <div class="text">
                评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论
                评论内容评论内容评论内容评论内容内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
              </div>
              <div class="comment-time">2020.01.06 11:12 53</div>
            </el-card>
          </div>
          <div class="soft-comment-content">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="comment-username">
                <span>用户名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">回复(10)</el-button>
              </div>
              <div class="text">
                评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论
                评论内容评论内容评论内容评论内容内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
              </div>
              <div class="comment-time">2020.01.06 11:12 53</div>
            </el-card>
          </div>
          <div class="soft-comment-content">
            <el-card class="box-card" shadow="hover">
              <div slot="header" class="comment-username">
                <span>用户名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">回复(10)</el-button>
              </div>
              <div class="text">
                评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论
                评论内容评论内容评论内容评论内容内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容
              </div>
              <div class="comment-time">2020.01.06 11:12 53</div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="评论" :visible.sync="dialogFormVisible">
      <el-form :model="comment">
        <el-form-item label="评论内容">
          <el-input type="textarea" v-model="comment.info"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">评论</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3.7,
      dialogFormVisible: false,

      comment: {
        info: ""
      }
    };
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
