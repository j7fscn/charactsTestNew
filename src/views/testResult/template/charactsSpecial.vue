<template>
  <div class="resultStyle">
      <p class="likeTitle">我的性格特点 </p>
      <div class="content">
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 0">
            <p>你是个<span class="subject-color">言行一致</span>的⼈，</p>
            <P>不念过去也不畏将来，</P>
            <P><span class="subject-color">冷静</span>地⾯对处理⼈⽣中的变化</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 1">
            <p>你是个<span class="subject-color">⼼细如发</span>的⼈，</p>
            <P>别⼈的看法很重要，</P>
            <P>也渴望得到真挚的认可和理解。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 2">
            <p>你是个<span class="subject-color">统领⼤局</span>的⼈，</p>
            <P>被动等待不是你的作⻛，</P>
            <P>总是能<span class="subject-color">把握趋势</span>去制定计划。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 3">
            <p>你是个<span class="subject-color">性情豪爽</span>的⼈，</p>
            <P>身边的⼈喜欢你的<span class="subject-color">开朗⼤⽅</span>，</P>
            <P>⼈群中的你都是<span class="subject-color">焦点</span>。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 4">
            <p>你是个<span class="subject-color">严于律⼰</span>的⼈，</p>
            <P>快速地适应多变的环境，</P>
            <P>也很清楚⾃⼰想要什么。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.choiceDraw == 5">
            <p>你是个<span class="subject-color">追求⾃由</span>的⼈，</p>
            <P>抗拒着⼀成不变的⽣活，</P>
            <P>不可预知的未来是你的向往。</P>
          </div>

          <div class="subject">
            <p v-if="dataJson.tooThpaste == 0" ><span class="subject-color">谨慎⼩⼼</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 1" ><span class="subject-color">个性随意</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 2" ><span class="subject-color">脚踏实地</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 3" ><span class="subject-color">不拘⼩节</span>是你的特质。</p>
          </div>
          <div class="subject">
              <p v-if="dataJson.dosome <=13 ">确是<span class="subject-color">好看</span>的你，</p>
              <p v-if="dataJson.dosome <=13 ">被⼈喜欢认同总能让你欣喜。</p>
              <p v-if="dataJson.dosome >13 ">确是<span class="subject-color">⾃信</span>的你，</p>
              <p v-if="dataJson.dosome >13 ">不曾在意别⼈⽚⾯看法。</p>
          </div>
          <div class="subject">
              <p v-if="dataJson.try ==0 ">不喜欢过于困难挑战的你，</p>
              <p v-if="dataJson.try ==0 ">更享受⽣活的平淡乐，</p>
              <p v-if="dataJson.try <=9 && dataJson.try>=3 "><span class="subject-color">好奇</span>的你，</p>
              <p v-if="dataJson.try <=9 && dataJson.try>=3 ">更想<span class="subject-color">尝试新事物</span>也渴望得到帮助，</p>
              <p v-if="dataJson.try >9 ">富有<span class="subject-color">冒险精神</span>的你，</p>
              <p v-if="dataJson.try >9 ">更喜欢不同常⼈的挑战，</p>

              <p v-if="dataJson.mustHave <12 ">也喜欢⽣活多⼀些<span class="subject-color">仪式感</span>，</p>
              <p v-if="dataJson.mustHave <12 ">来增添⽣活的不经意的⼩确幸。</p>
              <p v-if="dataJson.mustHave >=12 ">也重视⽣活<span class="subject-color">仪式感</span>，</p>
              <p v-if="dataJson.mustHave >=12 ">把每件事都做成值得回味的。</p>
          </div>
          <div class="subject">
              <p>-设计IN</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    props: ['dataJson'],
    data(){
        return{
        }
    },
   beforeUpdate() {  
       console.log(this.dataJson);
       this.getColor()
    },
    created() {
        
    },
    methods: {
      getColor(){
          var textColorNum = this.dataJson.choiceColor;
          var textColorArr= ['#e79e92','#deb844','#679cb6','#9eb58d','#fb7472','#7ccbe2'];  
          debugger   
          var textColor = textColorArr[textColorNum];
          console.log(textColor);
          debugger
         var allSpan =  document.querySelectorAll('span.subject-color'); //querySelectorAll  getElementsByClassName
        //   document.getElementsByClassName('.subject-color').style.color = textColor
            allSpan.style.color = textColor;
          debugger
      }
    }
}
</script>
<style scoped>
.resultStyle{
    margin-top: 1.1rem;
    margin-left :.2rem;
    margin-right:.2rem;
}
.resultStyle .likeTitle{
    margin-top:0;
    margin-bottom: .4rem;
    text-align: left;
    color:#666;
    line-height: .2rem;
    font-size: .2rem;
    text-decoration: underline;
}
.content{
    margin-left:.07rem;
    /* -webkit-box-shadow: #666 0px 0px 10px; */
    /* -moz-box-shadow: #666 0px 0px 10px; */
    box-shadow: #666 1px 0px 5px;
    
    background: #fff;
}
.titleLeft{
    margin-top:0;
    margin-bottom: .2rem;
    text-align: left;
    color:#222;
    line-height: .2rem;
    font-size: .2rem;
}
.subject{
    margin-top:.35rem;
}
.subject .subject-color{
    /* color:#9eb58d; */
}
.subject p{
    margin-top:0;
    margin-bottom: 0;
    margin-right: .34rem;
    line-height: .3rem;
    font-size: .16rem;
    text-align: right;
}
</style>

