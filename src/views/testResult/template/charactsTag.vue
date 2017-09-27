<template>
  <div class="m-charatcs">
    <p class="tit">我的性格标签</p>
    <div class="tag">
      <div class="head">
        <div class="shadow">
          <img src="static/images/girl.png">
        </div>
      </div>
      <div class="result">
        <div class="rt">
          <span>向外坦率</span>
          <i></i>
        </div>
        <div class="rt">
          <span>自律</span>
          <i></i>
        </div>
         <div class="rt">
            <i></i>
          <span>自由散漫</span>
        </div>
        <div class="rt">
            <i></i>
          <span>生性好奇</span>
        </div>
         <div class="rt">
            <i></i>
          <span>爱折腾胡闹</span>
        </div>
          <div class="rt">
            <i></i>
          <span>神秘沉重</span>
        </div>
         <div class="rt">
            <i></i>
          <span>神秘沉重</span>
        </div>
         <div class="rt">
            <i></i>
        
          <span>强迫症重度患者</span>
        </div>
         <div class="rt">
            <i></i>
 
          <span>强迫症重度患者</span>
        </div>
          <div class="rt">
            <i></i>
 
          <span>求知欲强</span>
        </div>
          <div class="rt">
            <i></i>
 
          <span>小性感</span>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.m-charatcs {
  padding: .5rem 0 2rem;
}

.m-charatcs .tit {
  color: #666;
  font-size: 19px;
  padding-top: .5rem;
  text-decoration: underline;
  padding-bottom:1.75rem;
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
  border-radius: 50%;
  margin: .1rem;
}

.tag {
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
  right: .25rem;
  font-size: .14rem;
  color: #679cb6;
}
.result .rt:nth-child(5) i {
  height: .35rem;
  width: .35rem;
  background: #fff;
}


.result .rt:nth-child(6) {
  top:.8rem;
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
  top:1.85rem;
  right:.4rem;
  font-size: .14rem;
  color: #e68caa;
}
.result .rt:nth-child(7) i {
  height: .2rem;
  width: .2rem;
  background: #fbfbfb;
}

.result .rt:nth-child(8) {
  top:1.23rem;
  left: 1.33rem;
  font-size: .14rem;
  color: #9cd87e;
}
.result .rt:nth-child(8) i {
  height: .2rem;
  width: .2rem;
  background: #fff;
}
.result .rt:nth-child(8)  span{
  position: absolute;
  left: 0;
  top:.2rem;
  width:1rem;
  
}
.result .rt:nth-child(9) {
  top:1.75rem;
  left: .2rem;
  font-size: .14rem;
  color: #e68caa;
}
.result .rt:nth-child(9) i {
  height: .2rem;
  width: .2rem;
  background: #f9f9f9;
}
.result .rt:nth-child(9)  span{
  position: absolute;
  left: 0;
  top:.2rem;
  width:1rem;
  
}

.result .rt:nth-child(10) {
  top:1.2rem;
  left: .2rem;
  font-size: .14rem;
  color: #74a5be;
}
.result .rt:nth-child(10) i {
  height: .15rem;
  width: .15rem;
  background: #f9f9f9;
}
.result .rt:nth-child(10)  span{
  position: absolute;
  left: 0;
  top:.2rem;
  width:1rem;
  
}

.result .rt:nth-child(11) {
  top:.43rem;
  left: .23rem;
  font-size: .14rem;
  color: #9cd87e;
}

.result .rt:nth-child(11) i {
  height: .4rem;
  width: .4rem;
  background: #f9f9f9;
}


</style>

