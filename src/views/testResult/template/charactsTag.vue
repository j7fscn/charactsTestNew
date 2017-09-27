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
        <!--题目2-->
        <div class="rt">
            <span>向外坦率</span>
          <i></i>
        
        </div>
        <!--题目3-->
        <div class="rt">
          <i></i>
          <span>自律</span>
        </div>
        <!--题目5-->
        <div class="rt">
          <i></i>
          <span>神秘沉重</span>
        </div>
        <!--题目6-->
        <div class="rt">
          <i></i>
          <span>爱折腾胡闹</span>
        </div>
        <!--题目7-->
        <div class="rt">
          <i></i>
          <span>生性好强</span>
        </div>
        <!--题目8-->
        <div class="rt">
          <i></i>
          <span>自由散漫</span>
        </div>
        <!--题目9-->
        <div class="rt">
          <i></i>
          <span>题目9</span>
        </div>
         <!--题目10-->
        <div class="rt">
          <i></i>
          <span>题目10</span>
        </div>
         <!--题目12-->
        <div class="rt">
          <i></i>
          <span>题目12</span>
        </div>
          <!--题目13-->
        <div class="rt">
          <i></i>
          <span>题目13</span>
        </div>
         <!--题目17-->
        <div class="rt">
          <i></i>
          <span>题目17</span>
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
  padding: .5rem .2rem 0 .2rem;
}

.m-charatcs .tit {
  color: #666;
  font-size: 19px;
  padding-top: .5rem;
  text-decoration: underline;
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
  padding-top: .1rem;
  padding-left: .1rem;
}

.m-charatcs .head img {
  width: 100%;
  border-radius: 50%;
}
.tag {
  position: relative;
}

.result .rt {
  position: absolute;


}
.result .rt:nth-child(1){
  left:-.1rem;
  top:.5rem;;

}
.result .rt span{
  display: inline-block;
  vertical-align: middle;
}
.result .rt:nth-child(1) i {
  display: inline-block;
  height: .2rem;
  width:.2rem;
  border-radius: 50%;
  background: #fff;
    display: inline-block;
  vertical-align: middle;

}
</style>

