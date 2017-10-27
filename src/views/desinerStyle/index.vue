<template>
    <div class="pageDesinerStyle">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+imgOrder/30*100+'%'"></div>
            </div>
            <span class="vl">24/24</span>

        </div>
        <p class="tit">谈谈你对这些风格的感受</p>
        <div class="imgCont">
            <div class="imgWrap">
                <transition name="fade">
                    <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/f-'+imgOrder+'.png'" :class="{imgAimate:fadeOut}" v-if="imgOrder<=30">

                </transition>
            </div>
        </div>

        <div class="opacity">
            <div class="cont">
                <div class="ceil">
                    <img src="http://owxa0vmjl.bkt.clouddn.com/dislike.png" v-if="!dislike" @click="dislikeChoice">
                    <img src="http://owxa0vmjl.bkt.clouddn.com/dislike-push.png" v-else>
                    <span class="tips"  v-bind:class="{ 'isActive': dislike }">不喜欢</span>
                </div>
                <div class="ceil">

                    <img src="http://owxa0vmjl.bkt.clouddn.com/no-feelings.png" v-if="!nofelling" @click="nofellingChoice">

                    <img src="http://owxa0vmjl.bkt.clouddn.com/no-feelings-push.png" v-else>
                     <span class="tips"  v-bind:class="{ 'isActive': nofelling }">没感觉</span>
                </div>
                <div class="ceil">

                    <img src="http://owxa0vmjl.bkt.clouddn.com/like.png" v-if="!like" @click="likeChoice">

                    <img src="http://owxa0vmjl.bkt.clouddn.com/like-push.png" v-else>
                    <span class="tips"  v-bind:class="{ 'isActive': like }">喜欢</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      btnClick: false,
      fadeOut: false,
      canClick: true,
      dislike: false,
      nofelling: false,
      like: false,
      currentKey: "likeStyle",
      dataJson: "",
      fisrtStyle: "",
      secondStyle: "",
      styleScore: {
        japanese: { score: 0, alias: "日式" },
        northernEurope: { score: 0, alias: "北欧" },
        mediterraneanSea: { score: 0, alias: "地中海" },
        french: { score: 0, alias: "法式" },
        industrialWind: { score: 0, alias: "工业风" },
        europeanism: { score: 0, alias: "古典欧式" },
        beautifulSimplicity: { score: 0, alias: "简美" },
        janeEuropean: { score: 0, alias: "简欧" },
        lightLuxury: { score: 0, alias: "轻奢" },
        modern: { score: 0, alias: "现代" },
        countryStyle: { score: 0, alias: "乡村美式" },
        chineseStyle: { score: 0, alias: "中式" }
      },
      imgOrder: 1,
      styleList: [
        {
          classFily: [{ name: "northernEurope", score: 1 }]
        },
        {
          classFily: [{ name: "northernEurope", score: 1 }]
        },
        {
          classFily: [{ name: "mediterraneanSea", score: 1 }]
        },
        {
          classFily: [{ name: "mediterraneanSea", score: 1 }]
        },
        {
          classFily: [{ name: "french", score: 1 }]
        },
        {
          classFily: [{ name: "french", score: 1 }]
        },
        {
          classFily: [{ name: "industrialWind", score: 1 }]
        },
        {
          classFily: [{ name: "industrialWind", score: 1 }]
        },
        {
          classFily: [{ name: "europeanism", score: 1 }]
        },
        {
          classFily: [{ name: "europeanism", score: 1 }]
        },
        {
          classFily: [{ name: "beautifulSimplicity", score: 1 }]
        },
        {
          classFily: [{ name: "beautifulSimplicity", score: 1 }]
        },
        {
          classFily: [{ name: "janeEuropean", score: 1 }]
        },
        {
          classFily: [{ name: "janeEuropean", score: 1 }]
        },
        {
          classFily: [{ name: "lightLuxury", score: 1 }]
        },
        {
          classFily: [{ name: "lightLuxury", score: 1 }]
        },
        {
          classFily: [{ name: "japanese", score: 1 }]
        },
        {
          classFily: [{ name: "japanese", score: 1 }]
        },
        {
          classFily: [{ name: "modern", score: 1 }]
        },
        {
          classFily: [{ name: "modern", score: 1 }]
        },
        {
          classFily: [{ name: "countryStyle", score: 1 }]
        },
        {
          classFily: [{ name: "countryStyle", score: 1 }]
        },
        {
          classFily: [{ name: "chineseStyle", score: 1 }]
        },
        {
          classFily: [
            { name: "mediterraneanSea", score: 0.11 },
            { name: "countryStyle", score: 0.55 },
            { name: "beautifulSimplicity", score: 0.34 }
          ]
        },
        {
          classFily: [
            { name: "french", score: 0.94 },
            { name: "lightLuxury", score: 0.2 }
          ]
        },
        {
          classFily: [
            { name: "northernEurope", score: 0.17 },
            { name: "lightLuxury", score: 0.57 },
            { name: "europeanism", score: 0.9 }
          ]
        },
        {
          classFily: [
            { name: "lightLuxury", score: 0.6 },
            { name: "mediterraneanSea", score: 0.27 },
            { name: "europeanism", score: 0.13 }
          ]
        },
        {
          classFily: [
            { name: "modern", score: 0.65 },
            { name: "chineseStyle", score: 0.35 }
          ]
        },
        {
          classFily: [
            { name: "beautifulSimplicity", score: 0.8 },
            { name: "lightLuxury", score: 0.15 },
            { name: "northernEurope", score: 0.05 }
          ]
        },
        {
          classFily: [{ name: "chineseStyle", score: 1 }]
        }
      ],
      pageName: "likeStyle",
      nextPage: "/likeMiddle"
    };
  },
  created() {
  
  },
  methods: {
    likeChoice() {
      this.addScore(1);
      this.choiceOption("like");
    },
    dislikeChoice() {
      this.addScore(0);
      this.choiceOption("dislike");
    },
    nofellingChoice() {
      this.addScore(0.05);
      this.choiceOption("nofelling");
    },
    choiceOption(btn) {
      var _self = this;
      if (!this.canClick) {
        return;
      }
      var opt = {};
      if (btn == "like") {
        this.like = true;
      } else if (btn == "dislike") {
        this.dislike = true;
      } else {
        this.nofelling = true;
      }
      this.fadeOut = false;
      this.imgOrder += 1;
      this.canClick = false;
      setTimeout(function() {
        if (_self.imgOrder == 31) {
          _self.maxScore();
        }
        _self.like = false;
        _self.dislike = false;
        _self.nofelling = false;
        _self.canClick = true;
      }, 800);
      setTimeout(() => {
        this.fadeOut = true;
      }, 50);
    },
    addScore(percent) {
      var _self = this;
      var items = this.styleList[this.imgOrder - 1].classFily;
      items.forEach(function(element) {
        _self.styleScore[element.name].score += element.score * percent;
      });
    },
    maxScore() {
      /*第一风格*/
      var max = 0;
      var maxstyle = "";
      for (var o in this.styleScore) {
        if (max < this.styleScore[o].score) {
          max = this.styleScore[o].score;
          maxstyle = this.styleScore[o].alias;
        }
      }
      this.fisrtStyle = maxstyle;
      this.secondMax();
    },
    secondMax() {
      /*第二风格*/
      var _self = this;
      var second = 0;
      var secondStyle = "";
      for (var o in this.styleScore) {
        if (
          second < this.styleScore[o].score &&
          this.styleScore[o].alias != this.fisrtStyle
        ) {
          second = this.styleScore[o].score;
          secondStyle = this.styleScore[o].alias;
        }
      }
      this.secondStyle = secondStyle;
      this.getUserData();
      console.log(this.fisrtStyle, this.secondStyle);
    },
    getUserData() {
      var _self = this;
      this.$store
        .dispatch("GetusrMes", this.$route.params.userid)
        .then(() => {
          var json = _self.$store.getters.userMes;
          _self.dataJson = json;
            _self.setUserData();
          
        })
        .catch(err => {
        
        });
    },
    setUserData() {
      var _self = this;
      this.dataJson[this.currentKey] = this.fisrtStyle + "," + this.secondStyle;
      this.dataJson.nextKey = '/likeMiddle'
      this.dataJson.result = 1;
      this.$store.dispatch("SetUsrMes", _self.dataJson)
        .then(success => {
          _self.$router.push({path: '/likeMiddle' + "/" + _self.$route.params.userid});
        })
        .cath(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.pageDesinerStyle {
  position: relative;
}
.pageDesinerStyle .tit {
  text-align: left;
  font-size: 0.17rem;
  margin-left: 0.2rem;
}
.pageDesinerStyle .opacity {
  bottom: 0.2rem;
  width: 100%;
  position: fixed;
}

.pageDesinerStyle .opacity .cont {
  display: flex;
  margin: 0 0.45rem;
  flex-direction: row;
  justify-content: space-around;
}
.pageDesinerStyle .imgCont {
  margin: 0.18rem 0.2rem 0 0.2rem;
}

.pageDesinerStyle .imgWrap img {
  width: 100%;
  transition-duration: 2s;
}

.pageDesinerStyle .ceil {
  width: 0.75rem;
  position: relative;
  text-align: center;
}
.pageDesinerStyle .isActive {
  color: #43bb57;
}

.pageDesinerStyle .ceil img {
  width: 100%;
  display: block;
}

.imgAimate {
  animation: myfirst 0.5s;
}

.postApp {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  opacity: 0;
}

.hideBtnNone {
  display: none;
}

.hideBtnBlock {
  display: block;
}

@keyframes myfirst {
  from {
    margin-left: 100%;
    opacity: 0;
    transform: rotateX(45deg);
    transform: rotateY(45deg);
  }
  to {
    width: 100%;
    opacity: 1;
    transform: rotateX(0deg);
    transform: rotateY(0deg);
  }
}
</style>