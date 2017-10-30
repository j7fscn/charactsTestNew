<template>
    <div class="double sing">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+mes.pageProgress/20*100+'%'"></div>
            </div>
            <span class="vl">{{mes.page}}/24</span>

        </div>
        <p class="tit">{{mes.tit}}</p>
        <ul>
            <li v-for="(item,index) in mes.dataList" @click="choice($event,index)">
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/characts'+item.src">
                        <div class="mask" v-if="item.choiced">
                            <div class="shadow"></div>
                            <div class="checked">
                                <img lazy src="http://owxa0vmjl.bkt.clouddn.com/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
             <div v-if="score>0"  class="cont checked" @click="setValue">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
           
         
        </div>
    </div>
</template>

<script>
export default {
  props: ["mes"],
  data() {
    return {
      score: 0,
      dataJson: "",
      currentKey: "",
      nextKey: "nextKey"
    };
  },
  mounted() {
    this.currentKey = this.mes.pageName;
  },
  methods: {
    choice(e, index) {
      if (this.mes.dataList[index].choiced) {
        this.mes.dataList[index].choiced = false;
        this.score -= this.mes.dataList[index].score;
        return;
      }
      this.checkedValue = this.mes.dataList[index].key;
      this.mes.dataList[index].choiced = true;
      this.score += this.mes.dataList[index].score;
    },
    setValue() {
      this.getUserData();
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
      this.dataJson[this.currentKey] = this.score;
      this.nextKey = this.mes.nextPage;
      this.$store
        .dispatch("SetUsrMes", _self.dataJson)
        .then(() => {
          _self.$router.push({
            path: _self.mes.nextPage + "/" + _self.$route.params.userid
          });
        })
        .catch(err => {
          console.log(err);
       });
    }
  }
};
</script>

<style>
/*mask*/

.mulSelect .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 22;
  top: 0;
  border-radius: 0.04rem;
}

.mulSelect .mask .shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.14;
}

.mulSelect .mask .checked {
  position: absolute;
  right: 0.15rem;
  bottom: 0.1rem;
  width: 0.2rem;
  z-index: 99;
  opacity: 1;
}

.mulSelect .mask .checked img {
  width: 100%;
  border: none;
}

/*mask*/

/*double*/

.sing.double li {
  float: left;
  width: 50%;
}

.mulSelect ul {
  margin: 0 0.1rem;
}

.mulSelect ul li .cont {
  margin: 0 0.1rem;
}

/*double*/

/*progress*/

.progress {
  margin: 0.26rem 0.2rem 0 0.2rem;
  overflow: hidden;
  text-align: right;
}

.mulSelect .memo {
  margin: 0.06rem 0 0.15rem 0;
  height: 16px;
  color: #666;
}

.mulSelect .bottom {
  position: fixed;
  bottom: 0.08rem;
  width: 100%;
}
</style>


