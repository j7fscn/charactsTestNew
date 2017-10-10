<template>
  <div class="m-charatcs">
    <div class="animateBox">
      <p class="tit">我的性格标签</p>
      <div class="tag" id="tag">
        <canvas id="animate" class="animate"> </canvas>
        <canvas class="headCanvas" id="headCanvas"></canvas>
      </div>
      <!-- <p class="tit">我的性格标签</p>
                  <div class="tag">
                    <div class="head">
                      <div class="shadow">
                        <img src="http://owxa0vmjl.bkt.clouddn.com/girl.png" id="tulipGirl" v-if="mes.sex==1">
                        <img src="http://owxa0vmjl.bkt.clouddn.com/man.png"  id="tulipBoy"  v-else >
                      </div>
                    </div> -->

      <!-- <div class="result">
                      <div class="rt">
                        <span v-if="mes.finger==0">外向坦率</span>
                        <span v-else>内敛含蓄</span>
                        <i></i>
                      </div>
                      <div class="rt">
                        <span v-if="mes.clock==0">依赖性强</span>
                        <span v-else>自律</span>
                        <i></i>
                      </div>
                      <div class="rt" v-if="mes.sex==0">
                        <i></i>
                        <span v-if="mes.faceScore==0">求知欲强</span>
                        <span v-else>注重外表</span>
                      </div>
                      <div class="rt" v-else>
                        <i></i>
                        <span v-if="mes.faceScore==0">求知欲强</span>
                        <span v-else>注重外在</span>
                      </div>
                      <div class="rt">
                        <i></i>
                        <span v-if="mes.travel==0">向往自由</span>
                        <span v-else>好胜心强</span>
                      </div>
                      <div class="rt">
                        <i></i>
                        <span v-if="mes.camera==0">爱折腾捣鼓</span>
                        <span v-else>简单直率</span>
                      </div>

                      <div class="rt" v-if="mes.sex==0">
                        <i></i>
                        <span v-if="mes.watch==0">喜新厌旧</span>
                        <span v-else>钟爱经典</span>
                      </div>

                      <div class="rt" v-else>
                        <i></i>
                        <span v-if="mes.shoes==0">优雅知性</span>
                        <span v-else>随性</span>
                      </div>

                      <div class="rt">
                        <i></i>
                        <span v-if="mes.orderFood==0">在意他人看法</span>
                        <span v-else>喜欢独立思考</span>
                      </div>
                      <div class="rt">
                        <i></i>

                        <span v-if="mes.unbear==17">强迫症重度患者</span>
                        <span v-if="mes.unbear>=9&&mes.unbear<=16">强迫症中度患者</span>
                        <span v-if="mes.unbear<9">强迫症轻微患者</span>
                      </div>
                      <div class="rt">
                        <i></i>

                        <span v-if="mes.knowMan==18">二次元骨灰级玩家</span>
                        <span v-if="mes.knowMan>=9&&mes.knowMan<=17">二次元中毒较深</span>
                        <span v-if="mes.knowMan>0&&mes.knowMan<=8">二次元轻度玩家</span>
                        <span v-if="mes.knowMan==0">对二次元不感冒</span>
                      </div>

                      <div class="rt" v-if="mes.sex==0">
                        <i></i>
                        <span>{{sportTeam+','+sportPerson}}</span>
                      </div>
                      <div class="rt" v-else>
                        <i></i>
                        <span>{{sportTeam+','+sportPerson}}</span>
                      </div>

                      <div class="rt" v-if="mes.sex==0">
                        <i></i>
                        <span v-if="mes.hairStyle==0">中规中矩</span>
                        <span v-else>骚气</span>
                      </div>
                      <div class="rt" v-else>
                        <i></i>
                        <span v-if="mes.skillStockings<=7">小性感</span>
                        <span v-else>超级性感</span>
                      </div>

                    </div> -->

    </div>
  </div>
</template>
<script>
export default {
  props: ['mes'],

  data() {
    return {
      sportTeam: '',
      sportPerson: '',

    }
  },
  mounted() {
    this.drawHead();
    this.drawline();


  },
  created() {


  },
  beforeUpdate() {

  },
  methods: {
    drawline() {
      var tag = document.getElementById('tag');
      var animate = document.getElementById('animate');
      var winWidth = document.documentElement.clientWidth;
      var content=tag.offsetWidth;
      tag.style.height = 315 + 'px';
      // animate.style.height = 315 + 'px';
      var circleX = tag.offsetWidth /2;
      var circleY = tag.offsetHeight/2;
      var lineArray = [

        { lineX: 0, lineY: 0 },
    
       
      ];
      var c = document.getElementById("animate");
      var oContext = c.getContext("2d");
      lineArray.forEach(function(k, i) {
        oContext.beginPath();
        oContext.moveTo(circleX, circleY);
        oContext.lineTo(k.lineX, k.lineY);
        oContext.lineWidth = 1;
        oContext.strokeStyle = "#eee"; //设置或返回用于笔触的颜色、渐变
        oContext.stroke();
      });
    },
    drawHead() {
      var _self = this;
      var winWidth = document.documentElement.clientWidth;
      var tag = document.getElementById('tag');
      var c = document.getElementById("headCanvas");
      var ctx = c.getContext("2d");
      var imgWidth = 176 * winWidth / 750;
      var img = new Image();
      img.src = "http://owxa0vmjl.bkt.clouddn.com/girl.png";
      img.onload = function() {
        ctx.drawImage(img, imgWidth, 0, imgWidth, imgWidth/1.5);
        c.style.paddingTop = (tag.offsetHeight - imgWidth) / 2 + 'px';

      };


    },
    getScore() {
      if (this.mes.sex == 0) {

        var arr = this.mes.sport.split(',');
        this.sportTeam = arr[0] >= 5 ? '喜欢团队协作' : '喜欢独处';//
        this.sportPerson = arr[1] >= 5 ? '生性好强' : '性情温和';
        return

      }
      var arr = this.mes.sportW.split(',');
      this.sportTeam = arr[0] >= 5 ? '喜欢团队协作' : '喜欢独处';//
      this.sportPerson = arr[1] >= 5 ? '生性好强' : '性情温和';
    }
  }
}
</script>
<style scoped>
.m-charatcs {
  padding: .1rem 0 2rem;
}

.animate {
  position: absolute;
  left: 0;
  top:0;

}

.headCanvas {
  z-index: 5;
  width: 100%;
  height: 3.16rem;
  position: relative;
  top: 0;
  left: 0;
  z-index:55;

}

.m-charatcs .tit {
  color: #666;
  font-size: 19px;
  padding-top: .5rem;
  text-decoration: underline;
  /* padding-bottom: 1.75rem; */
  text-align: left;
  padding-left: .2rem;
}

.animateBox {
  position: relative;
}

.m-charatcs .head {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0 auto;
  background: #fff;
  border-radius: 50%;
  position: relative;
  z-index: 88;
}





/* .m-charatcs .head .shadow {
  width: 1rem;
  height: 1rem;
  
} */

.m-charatcs .head img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.m-charatcs .tag {
  position: relative;
  margin: 0 .2rem;
  height: 1rem;
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
  vertical-align: middle;
  border-radius: 50%;
}

.result .rt i:after {
  display: inline-block;
  content: '';
  width: .01rem;
  position: absolute;
  background: #e4e4e4;
}

.result .rt:nth-child(1) i {
  height: .23rem;
  width: .23rem;
  background: #fff;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(1) i:after {
  height: .6rem;
  transform: rotate(-45deg);
  top: .1rem;
  right: -.2rem;
}

.result .rt:nth-child(2) {
  left: .8rem;
  top: -.65rem;
  font-size: .14rem;
  color: #dcad9c;
}

.result .rt:nth-child(2) i {
  height: .15rem;
  width: .15rem;
  background: #f7f7f7;
  box-shadow: 1px 1px 1px #fff;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(2) i:after {
  height: 1rem;
  transform: rotate(-20deg);
  top: .15rem;
  right: -.15rem;
}

.result .rt:nth-child(3) {
  right: 1.2rem;
  top: -1.05rem;
  font-size: .14rem;
  color: #e7908d;
}

.result .rt:nth-child(3) i {
  height: .2rem;
  width: .2rem;
  background: #f7f7f7;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(3) i:after {
  height: 1rem;
  transform: rotate(-10deg);
  top: .2rem;
  left: .2rem;
}

.result .rt:nth-child(4) {
  right: .65rem;
  top: -.37rem;
  font-size: .14rem;
  color: #e79e92;
}

.result .rt:nth-child(4) i:after {
  height: .5rem;
  transform: rotate(30deg);
  top: .25rem;
  left: -.05rem;
}

.result .rt:nth-child(4) i {
  height: .3rem;
  width: .3rem;
  background: #fff;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
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
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(5) i:after {
  height: .5rem;
  transform: rotate(61deg);
  top: .15rem;
  left: -.15rem;
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
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(7) {
  top: 1.8rem;
  right: .2rem;
  font-size: .14rem;
  color: #e68caa;
}

.result .rt:nth-child(7) i {
  position: absolute;
  top: -.2rem;
  height: .2rem;
  width: .2rem;
  background: #fbfbfb;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
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
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
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
  position: absolute;
  left: .4rem;
  height: .2rem;
  width: .2rem;
  background: #f9f9f9;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
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
  position: absolute;
  left: .88rem;
  top: -.2rem;
  height: .15rem;
  width: .15rem;
  background: #f9f9f9;
  box-shadow: 0.02rem 0.04rem 0.03rem #ccc;
}

.result .rt:nth-child(10) span {
  position: absolute;
  left: -.2rem;
  top: -.2rem;
  width: 1rem;
}

.result .rt:nth-child(11) {

  top: .43rem;
  left: -.1rem;
  font-size: .14rem;
  color: #9cd87e;
}

.result .rt:nth-child(11) i {
  position: absolute;
  top: -.2rem;
  left: .8rem;
  height: .4rem;
  width: .4rem;
  background: #fff;
  box-shadow: .02rem .04rem .03rem #ccc;
}

.result .rt:nth-child(11) span {
  position: absolute;
  left: 0px;
  top: 0rem;
  width: 1rem;
}

.page-result {
  max-width: 8rem;
  margin: 0 auto;
}

.canvasHead {
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
}
</style>

