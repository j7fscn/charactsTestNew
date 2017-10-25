<template>
    <div class="resultStyle">
        <!-- <div class="shareIcon"></div> -->
        <p class="likeTitle"><span class="likeSpan">可能喜欢的⻛格</span></p>
        <ul class="list">
            <p class="titleLeft">{{likeStyle[0]}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate1" v-bind:class="[imgAnimate[1].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[0] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src"></div>

                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate2" v-bind:class="[imgAnimate[2].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[0] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src1"></div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <p class="titleLeft">{{likeStyle[1]}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate3" v-bind:class="[imgAnimate[3].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[1] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src"></div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate4" v-bind:class="[imgAnimate[4].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[1] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src1"></div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="mt40">
            <div class="btn">
                     <div class="cont" @click="shareLayer" v-if="isFromShare">通&nbsp;知&nbsp;好&nbsp;友</div>
               <div v-else>
                    <router-link to="/shareStart" v-if="isShare">
                    <a class="cont">我&nbsp;要&nbsp;测&nbsp;试</a>
                </router-link>
                <div class="cont" @click="postResult" v-else>进&nbsp;入&nbsp;设&nbsp;计&nbsp;IN</div>
               </div>
            </div>
        </div>
        <div class="layerShare" v-if="isLayer" @click="shareLayer" id="layerShare">
          <div class="shareImg">
            <img src="http://ovfllimsi.bkt.clouddn.com/Guideshare.png" >
          </div>
        </div>
    </div>
</template>
<script>
import wx from 'weixin-js-sdk'
export default {
  name: "likeStyle",
  props: ["dataJson", "imgAnimate"],

  data() {
    return {
      isShare: false, //APP分享页面判断
      isFromShare: false, //判断是来源APP还是分享的
      isLayer: false,
      strArr: [],
      likeStyle: [],
      message: {
        dataList: [
          {
            name: "北欧",
            src: "l-1-1.png",
            src1: "l-1-2.png"
          },
          {
            name: "日式",
            src: "l-2-1.png",
            src1: "l-2-2.png"
          },
          {
            name: "地中海",
            src: "l-3-1.png",
            src1: "l-3-2.png"
          },
          {
            name: "中式",
            src: "l-4-1.png",
            src1: "l-4-2.png"
          },
          {
            name: "轻奢",
            src: "l-5-1.png",
            src1: "l-5-2.png"
          },
          {
            name: "乡村美式",
            src: "l-6-1.png",
            src1: "l-6-2.png"
          },
          {
            name: "现代美式",
            src: "l-7-1.png",
            src1: "l-7-2.png"
          },
          {
            name: "现代简约",
            src: "l-8-1.png",
            src1: "l-8-2.png"
          },
          {
            name: "法式",
            src: "l-9-1.png",
            src1: "l-9-2.png"
          },
          {
            name: "工业风",
            src: "l-10-1.png",
            src1: "l-10-2.png"
          },
          {
            name: "古典欧式",
            src: "l-11-1.png",
            src1: "l-11-2.png"
          },
          {
            name: "简欧",
            src: "l-12-1.png",
            src1: "l-12-2.png"
          }
        ]
      }
    };
  },
  mounted() {
    this.shareDuge();
    setTimeout(() => {
      this.allStyle();
      this.isFromShare = this.dataJson.fromShare - 0;
      this.shareWx();
   
    }, 500);
  },

  created() {
    if(this.$bridge){
       this.$bridge.callHandler(
      "enterLastPage",
      { testResult: { result: 1 } },
      function(data) {}
    );
    }
   
  },
  methods: {
    allStyle() {
      this.strArr = decodeURIComponent(this.dataJson.likeStyle).split(",");
      this.strArr[0] = decodeURIComponent(this.strArr[0]);
      this.likeStyle[0] = decodeURIComponent(this.strArr[0]);
      this.strArr[1] = decodeURIComponent(this.strArr[1]);
      this.likeStyle[1] = decodeURIComponent(this.strArr[1]);
      var styleAll = [
        "北欧",
        "日式",
        "地中海",
        "中式",
        "轻奢",
        "乡村美式",
        "简美",
        "现代",
        "法式",
        "工业风",
        "古典欧式",
        "简欧"
      ];
      styleAll.forEach((item, index) => {
        if (this.strArr[0] == item) {
          this.strArr[0] = index;
        }
        if (this.strArr[1] == item) {
          this.strArr[1] = index;
        }
      });
    },
    shareDuge() {
      if (window.location.href.lastIndexOf("shareResult") != -1) {
        this.isShare = true;
      }
    },
    //点击分享模态导航
    showGuide() {},
    postResult() {
      var _likeStyle = decodeURIComponent(this.dataJson.likeStyle).split(",");
      console.log({
        likeStyle: _likeStyle,
        houseArea: decodeURIComponent(this.dataJson.houseArea),
        result: 1
      });
      this.$bridge.callHandler(
        "callWithDict",
        {
          testResult: {
            likeStyle: _likeStyle,
            houseArea: decodeURIComponent(this.dataJson.houseArea),
            result: 1
          }
        },
        function(data) {}
      );
    },
    parseQueryString(url) {
      var obj = {};
      var keyvalue = [];
      var key = "",
        value = "";
      var paraString = url
        .substring(url.indexOf("?") + 1, url.length)
        .split("&");
      for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];
        obj[key] = value;
      }
      return obj;
    },

    shareLayer() {
      var height = window.screen.height;

      this.isLayer = !this.isLayer;
    },
    shareWx() {
      this.getWxAppid();
      this.shareReady();
    },
    getWxAppid() {
      var url = "http://bos.foreverlynn.com/weixin/getWXUrl";
      this.$jsonp(url,{url: location.href.replace(location.hash, "")})
        .then(res => {
          if (res.code != "200") {
            return
          }
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.result.appId, // 必填，公众号的唯一标识
            timestamp: res.data.result.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.result.nonceStr, // 必填，生成签名的随机串
            signature: res.data.result.signature, // 必填，签名
            jsApiList: [
              "onMenuShareTimeline",
              "onMenuShareAppMessage",
              "startRecord",
              "stopRecord",
              "onVoiceRecordEnd",
              "playVoice",
              "pauseVoice",
              "stopVoice",
              "onVoicePlayEnd",
              "uploadVoice",
              "downloadVoice",
              "chooseImage",
              "previewImage",
              "uploadImage",
              "downloadImage"
            ] // 必填，需要使用的JS接口列表
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    shareReady() {
      wx.ready(function() {
        // 在这里调用 API
        wx.onMenuShareAppMessage({
            link:'http://wesetup.cn/chatactsTest/index.html#/shareStart',
          title: "测试你的性格", // 分享标题
          desc: "怎么不信？我们可以试试", // 分享描述
          imgUrl: "http://ovfllimsi.bkt.clouddn.com/logo.png", // 分享图标
          success: function(success) {
              console.log(success);
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        });

        wx.onMenuShareTimeline({
         link:'http://wesetup.cn/chatactsTest/index.html#/shareStart',
          title: "测试你的性格", // 分享标题
          desc: "怎么不信？我们可以试试", // 分享描述
          imgUrl: "http://ovfllimsi.bkt.clouddn.com/logo.png", // 分享图标
          success: function(success) {
             console.log(success);
            // 用户确认分享后执行的回调函数
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
          }
        });
        wx.error(function(res) {
          console.log(res);
        });
      });
    }
  }
};
</script>
<style scoped>
.resultStyle {
  margin-top: 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.layerShare {
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 9999;
  top: 0;
}
.shareImg {
  position: absolute;
  top: 0%;
  width: 2rem;
  right: 0.2rem;
  z-index: 9999999;
}
.shareImg img {
  width: 100%;
}
.shareIcon {
  position: absolute;
  width: 40px;
  height: 40px;
  background: url(http://ovfllimsi.bkt.clouddn.com/Guide%20share@2x.png);
}
.resultStyle .likeTitle {
  margin-top: 0;
  margin-bottom: 0.4rem;
  text-align: left;
  color: #666;
  line-height: 0.2rem;
  font-size: 0.2rem;
  /* text-decoration: underline; */
}
.likeSpan {
  padding-bottom: 4px;
  border-bottom: 2px solid #666;
}
.titleLeft {
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
  text-align: left;
  color: #222;
  line-height: 0.2rem;
  font-size: 0.2rem;
}

img {
  width: 100%;
  display: block;
}

.list,
.list li {
  padding: 0;
  list-style-type: none;
}

.list li {
  margin: 0.1rem 0;
}

.cont {
  width: 100%;
}

.mt40 {
  margin-top: 40px;
}

.btn {
  position: relative;
  bottom: 0.08rem;
  width: 100%;
}

.btn .cont {
  /* margin: 0 .2rem .15rem .2rem; */
  color: #fff;
  font-size: 0.17rem;
  border-radius: 0.04rem;
  line-height: 0.44rem;
  height: 0.44rem;
  background: #43bb57;
}

.btn a.cont {
  display: inline-block;
  text-decoration: none;
}
</style>



