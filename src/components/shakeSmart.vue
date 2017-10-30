<template>
    <div class="double sing">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+mes.pageProgress/3*100+'%'"></div>
            </div>
            <span class="vl">{{mes.page}}/24</span>

        </div>
        <p class="tit">{{mes.tit}}</p>
        <ul>
            <li v-for="(item,index) in mes.dataList"> 
                 <!-- @click="choice($event,index)" -->
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="item.src">
                      
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
            <div  class="cont checked" @click="nextPage">记&nbsp;&nbsp;住&nbsp;&nbsp;了</div>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
  props: ["mes"],
  data() {
    return {
      dataJson: "",
      user_id: "",
      doShakeSmart: 0
    };
  },
  methods: {
    nextPage() {
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
      this.dataJson.shakeSmart =this.mes.nextPage== "/shakeResult"?1:0;
      this.dataJson.nextKey = this.mes.nextPage;
      this.$store.dispatch("SetUsrMes", this.dataJson).then(() => {
          _self.$router.push({ path: _self.mes.nextPage+'/'+_self.$route.params.userid});
      })
    .catch(err => {
          console.log(err);
    });
    }
  }
};
</script>


