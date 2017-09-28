<template>
  <div class="m-charatcs">
    <p class="tit">我的性格标签</p>
    <div class="tag">
      <div class="head">
        <div class="shadow">
          <img src="static/images/girl.png" v-if="result.sex==1">
          <img src="static/images/man.png" v-else>
        </div>
      </div>
      <div class="result">
        <div class="rt">
          <span v-if="result.finger==0">向外坦率</span>
          <span v-else>向外坦率</span>
          <i></i>
        </div>
        <div class="rt">
          <span v-if="result.clock==0">依赖性强</span>
          <span v-else>自律</span>
          <i></i>
        </div>
        <div class="rt" v-if="result.sex==0">
          <i></i>
          <span v-if="result.faceScore==0">求知欲强</span>
          <span v-else>注重外表</span>
        </div>
        <div class="rt" v-else>
          <i></i>
          <span v-if="result.faceScore==0">求知欲强</span>
          <span v-else>注重外在</span>
        </div>
        <div class="rt">
          <i></i>
          <span v-if="result.travel==0">向往自由</span>
          <span v-else>好胜心强</span>
        </div>
        <div class="rt">
          <i></i>
          <span v-if="result.camera==0">爱折腾捣鼓</span>
          <span v-else>爱折腾捣鼓</span>
        </div>

        <div class="rt" v-if="result.sex==0">
          <i></i>
          <span v-if="result.watch==0">喜新厌旧</span>
          <span v-else>钟爱经典</span>
        </div>

        <div class="rt" v-else>
          <i></i>
          <span v-if="result.skillStockings">优雅知性</span>
          <span class="v-else">随性</span>
        </div>

        <div class="rt">
          <i></i>
          <span v-if="result.orderFood==0">在意他人看法</span>
          <span v-else>喜欢独立思考</span>
        </div>
        <div class="rt">
          <i></i>

          <span v-if="result.unbear==17">强迫症重度患者</span>
          <span v-if="result.unbear>=9&&result.unbear<=16">强迫症中度患者</span>
          <span v-if="result.unbear<9">强迫症轻微患者</span>
        </div>
        <div class="rt">
          <i></i>

          <span v-if="result.knowMan==18">二次元骨灰级玩家</span>
          <span v-if="result.knowMan>=9&&result.knowMan<=17">二次元中毒较深</span>
          <span v-if="result.knowMan>0&&result.knowMan<=8">二次元轻度玩家</span>
          <span v-if="result.knowMan==0">对二次元不感冒</span>
        </div>

        <div class="rt" v-if="result.sex==0">
          <i></i>
          <span v-if="sportTeam>=5">喜欢团队协作</span>
          <span v-else>喜欢独处</span>

          <span v-if="sportPerson>=4">生性好强</span>
          <span v-else>性情温和</span>
        </div>
        <div class="rt" v-else>
          <i></i>
          <span v-if="sportTeam>=5">喜欢团队协作</span>
          <span v-else>喜欢独处</span>

          <span v-if="sportPerson>=5">生性好强</span>
          <span v-else>性情温和</span>
        </div>

        <div class="rt" v-if="result.sex==0">
          <i></i>
          <span v-if="result.hairStyle==0">中规中矩</span>
          <span v-else>骚气</span>
        </div>
        <div class="rt" v-else>
          <i></i>
          <span v-if="result.skillStockings<=7">小性感</span>
          <span v-else>超级性感</span>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: ['result'],
  data() {
    return {
      sportTeam: 0,
      sportPerson: 0,

    }
  },
  mounted() {

  },
  methods: {
    getScore() {
      var arr = [];
      if (this.result.sex == 0) {
        arr = this.result.sport.split(',');
        return
      }

      arr = this.result.sport.split(',');
      this.sportTeam = arr[0];
      this.sportPerson = arr[1];
    }
  }
}
</script>
<style scoped>
.m-charatcs {
  padding: .5rem 0 2rem;
}

.m-charatcs .tit {
  color: #666;
  font-size: 19px;
  padding-top: .5rem;
  text-decoration: underline;
  padding-bottom: 1.75rem;
  text-align: left;
  padding-left: .2rem;
}

.m-charatcs .head {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 50%;
}

.m-charatcs .head .shadow {
  width: 1rem;
  height: 1rem;
}

.m-charatcs .head img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin: .1rem;
}

.m-charatcs .tag {
  position: relative;
}

.result {
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
}

.result .rt {
  position: absolute;
}

.result .rt span {
  display: inline-block;
  vertical-align: middle;
}

.result .rt:nth-child(1) {
  left: .5rem;
  top: -.16rem;
  font-size: .14rem;
  color: #9eb58d;
}

.result .rt i {
  display: inline-block;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
}

.result .rt:nth-child(1) i {
  height: .23rem;
  width: .23rem;
  background: #fff;
}

.result .rt:nth-child(2) {
  left: 1.2rem;
  top: -.85rem;
  font-size: .14rem;
  color: #dcad9c;
}

.result .rt:nth-child(2) i {
  height: .15rem;
  width: .15rem;
  background: #f7f7f7;
}

.result .rt:nth-child(3) {
  right: .81rem;
  top: -1.05rem;
  font-size: .14rem;
  color: #e7908d;
}

.result .rt:nth-child(3) i {
  height: .2rem;
  width: .2rem;
  background: #f7f7f7;
}

.result .rt:nth-child(4) {
  right: .65rem;
  top: -.37rem;
  font-size: .14rem;
  color: #e79e92;
}

.result .rt:nth-child(4) i {
  height: .3rem;
  width: .3rem;
  background: #fff;
}

.result .rt:nth-child(5) {
  right: .2rem;
  font-size: .14rem;
  color: #679cb6;
}

.result .rt:nth-child(5) i {
  height: .3rem;
  width: .3rem;
  background: #fff;
}


.result .rt:nth-child(6) {
  top: .8rem;
  right: .25rem;
  font-size: .14rem;
  color: #9eb58d;
}

.result .rt:nth-child(6) i {
  height: .2rem;
  width: .2rem;
  background: #fff;
}

.result .rt:nth-child(7) {
  top: 1.85rem;
  right: .4rem;
  font-size: .14rem;
  color: #e68caa;
}

.result .rt:nth-child(7) i {
  height: .2rem;
  width: .2rem;
  background: #fbfbfb;
}

.result .rt:nth-child(8) {
  top: 1.45rem;
  left: 1.33rem;
  font-size: .14rem;
  color: #9cd87e;
}

.result .rt:nth-child(8) i {
  height: .2rem;
  width: .2rem;
  background: #fff;
}

.result .rt:nth-child(8) span {
  position: absolute;
  left: 0;
  top: .2rem;
  width: 1rem;
}

.result .rt:nth-child(9) {
  top: 1.75rem;
  left: .2rem;
  font-size: .14rem;
  color: #e68caa;
}

.result .rt:nth-child(9) i {
  height: .2rem;
  width: .2rem;
  background: #f9f9f9;
}

.result .rt:nth-child(9) span {
  position: absolute;
  left: 0;
  top: .2rem;
  width: 1rem;
}

.result .rt:nth-child(10) {
  top: 1.2rem;
  left: .2rem;
  font-size: .14rem;
  color: #74a5be;
}

.result .rt:nth-child(10) i {
  height: .15rem;
  width: .15rem;
  background: #f9f9f9;
}

.result .rt:nth-child(10) span {
  position: absolute;
  left: 0;
  top: .2rem;
  width: 1rem;
}

.result .rt:nth-child(11) {
  top: .43rem;
  left: .23rem;
  font-size: .14rem;
  color: #9cd87e;
}

.result .rt:nth-child(11) i {
  height: .4rem;
  width: .4rem;
  background: #fff;
}

.page-result {
  max-width: 8rem;
  margin: 0 auto;
}
</style>

