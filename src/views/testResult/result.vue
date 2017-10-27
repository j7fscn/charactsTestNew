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
  created() {
     this.getUserData();
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
     getUserData() {
        var _self=this;
       this.$store
        .dispatch("GetusrMes", this.$route.params.userid)
        .then(() => {
          var json = _self.$store.getters.userMes;
          _self.dataJson = json;
        })
        .catch(err => {
          console.log(err);
        });
    },


  },


}
</script>
<style >
.page-result {
  background: url(http://owxa0vmjl.bkt.clouddn.com/background.png) center 5rem;
}
</style>


