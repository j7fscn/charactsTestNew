<template>
    <div :class="mes.dataList.length>=4?'double sing':'one sing'">
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
                                <img src="http://owxa0vmjl.bkt.clouddn.com/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
            <div v-if="checkedValue==-1" class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont checked" @click="setValue">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>

        </div>
    </div>
</template>

<script>
export default {
  props: ["mes"],
  data() {
    return {
      dataJson: "",
      currentKey: "",
      user_id: "",
      sex: "",
      checkedValue: -1,
      checkedImgKey: "",
      doShakeSmart: 0
    };
  },
  created() {
    if (this.mes.nextPage == "/sex") {
      this.doShakeSmart = 1;
    }
  },
  mounted() {
    this.currentKey = this.mes.pageName;
  },
  methods: {
    choice(e, index) {
      if (this.mes.dataList[index].choiced) {
        this.mes.dataList[index].choiced = false;
        this.checkedValue = -1;
        return;
      }
      this.checkedValue = this.mes.dataList[index].key;
      this.mes.dataList[index].choiced = true;
      this.mes.dataList.forEach(function(k, i) {
        if (i != index) {
          k.choiced = false;
        }
      });
    },
    setValue() {
      this.getUserData();
    },
    getUserData() {
        var _self=this;
      this.$store
        .dispatch("GetusrMes", this.$route.params.userid)
        .then(() => {
          var json = _self.$store.getters.userMes;
          _self.dataJson = json;
          _self.setUserData();
        })
        .catch(err => {
           console.log(err);
        });
    },
    setUserData() {
      var _self = this;
      this.dataJson[this.currentKey] = this.checkedValue;
      this.dataJson.nextKey = this.mes.nextPage;
      this.$store
        .dispatch("SetUsrMes", _self.dataJson)
        .then(() => {
          _self.$router.push({ path: _self.mes.nextPage + "/" + _self.$route.params.userid
          });
        })
        .catch(err => {
            console.log(err);
        });
    },


  }
};
</script>


<style>
/*mask*/

/*double*/

.sing.double li {
  float: left;
  width: 50%;
}

.sing.double ul {
  margin: 0 0.1rem;
}

.sing.double ul li .cont {
  margin: 0 0.1rem;
}

/*double*/
</style>


