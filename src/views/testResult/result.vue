<template>
  <div class="page-result">
    <characts-tag :mes="dataJson"></characts-tag>
    <characts-special :dataJson="dataJson"></characts-special>
    <like-color :dataJson="dataJson" :imgAnimate="imgAnimate"></like-color>
    <like-style :dataJson="dataJson" :imgAnimate="imgAnimate"></like-style>

  </div>
</template>
<script>
import charactsTag from './template/charactsTag'
import charactsSpecial from './template/charactsSpecial'
import likeColor from './template/likeColor'
import likeStyle from './template/likeStyle'
export default {
  components: { charactsTag, charactsSpecial, likeColor, likeStyle },
  data() {
    return {
      domArry: [],
      dataJson: '',
      imgAnimate: [{ "isFirst": true, "isShow": false }, { "isFirst": true, "isShow": false }, { "isFirst": true, "isShow": false }, { "isFirst": true, "isShow": false }, { "isFirst": true, "isShow": false }]
    }
  },
  beforeCreate() {
    var _self = this;
    var urlG = 'http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid;
    this.$jsonp(urlG).then(function(json) {
      _self.dataJson = _self.parseQueryString(json.data.result);

    }).catch(err => {
      console.log(err)
    });
  },
  created() {

  },
  mounted() {
    this.$nextTick(function(){
       this.getStartOffset();
        window.addEventListener('scroll', this.scrollEvent);
    });
   
  },
  methods: {
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    getStartOffset() {
      setTimeout(() => {
        for (var i = 0; i < 5; i++) {

          var dom = document.getElementById('imgAnimate' + i);
          if (!dom) {
            return
          }
          this.domArry.push(dom.offsetTop);
        }
      }, 500)

    },
    scrollEvent() {
      var _self = this;
      this.imgAnimate.forEach(function(k, i) {
        if (!k.isFirst) {
          return
        }
        console.log(_self.getScrollTop(),_self.domArry[0]);
   
        if ((_self.getScrollTop() - _self.domArry[i]) > -442) {
          k.isShow = true;
          k.isFirst = false;
        }

      });
    },
    parseQueryString(url) {
      var obj = {};
      var keyvalue = [];
      var key = "", value = "";
      var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
      for (var i in paraString) {
        keyvalue = paraString[i].split("=");
        key = keyvalue[0];
        value = keyvalue[1];
        obj[key] = value;
      }
      return obj;
    }

  },


}
</script>
<style >
.page-result {
  background: url(http://owxa0vmjl.bkt.clouddn.com/background.png) center 5rem;
}
</style>


