<template>
  <div class="page-result">
    <characts-tag :result="dataJson"></characts-tag>
<<<<<<< HEAD
    <!-- <characts-special :result1="dataJson"></characts-special> -->
    <!-- <like-color :result="dataJson"></like-color> -->
    <like-style :result="dataJson"></like-style>
=======
    <!-- <characts-special :result="dataJson"></characts-special> -->
    <like-color :result="dataJson"></like-color>
    <!-- <like-style :result="dataJson"></like-style> -->
>>>>>>> ac27c9cb762820a73e5e1616438522e98d32ac9f
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
      dataJson:'',
    }
  },
  created() {
      var _self = this;
      let urlG = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid)
      this.$jsonp(urlG).then(function(json) {
        _self.dataJson = _self.parseQueryString(json.data.result);
    
      }).catch(err => {
        console.log(err)
      });
  },
  methods: {
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
        },
  }

}
</script>
<style >
.page-result {
  background: url(http://owxa0vmjl.bkt.clouddn.com/background.png) center center;
}
</style>


