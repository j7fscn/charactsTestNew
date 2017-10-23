<template>
  <div class="resultStyle">
      <p class="likeTitle"><span class="likeSpan">我的性格特质</span> </p>
      <div class="content">
          <div class="outlineLeft" :style="{background:textColor}"></div>
          <div class="outlineBottom" :style="{background:textColor}"></div>
          <div class="subject titEleven" v-if="dataJson.sleep == 0">
            <p>你是个<span :style="{color:textColor}" class="subject-color">言行一致</span>的⼈，</p>
            <P>不念过去也不畏将来，</P>
            <P><span :style="{color:textColor}" class="subject-color">冷静</span>地⾯对处理⼈⽣中的变化</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.sleep == 1">
            <p>你是个<span :style="{color:textColor}" class="subject-color">⼼细如发</span>的⼈，</p>
            <P>别⼈的看法很重要，</P>
            <P>也渴望得到真挚的认可和理解。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.sleep == 2">
            <p>你是个<span :style="{color:textColor}" class="subject-color">统领⼤局</span>的⼈，</p>
            <P>被动等待不是你的作⻛，</P>
            <P>总是能<span :style="{color:textColor}" class="subject-color">把握趋势</span>去制定计划。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.sleep == 3">
            <p>你是个<span :style="{color:textColor}" class="subject-color">性情豪爽</span>的⼈，</p>
            <P>身边的⼈喜欢你的<span :style="{color:textColor}" class="subject-color">开朗⼤⽅</span>，</P>
            <P>⼈群中的你都是<span :style="{color:textColor}" class="subject-color">焦点</span>。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.sleep == 4">
            <p>你是个<span :style="{color:textColor}" class="subject-color">严于律⼰</span>的⼈，</p>
            <P>快速地适应多变的环境，</P>
            <P>也很清楚⾃⼰想要什么。</P>
          </div>
          <div class="subject titEleven" v-if="dataJson.sleep == 5">
            <p>你是个<span :style="{color:textColor}" class="subject-color">追求⾃由</span>的⼈，</p>
            <P>抗拒着⼀成不变的⽣活，</P>
            <P>不可预知的未来是你的向往。</P>
          </div>

          <div class="subject">
            <p v-if="dataJson.tooThpaste == 0" ><span :style="{color:textColor}" class="subject-color">谨慎⼩⼼</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 1" ><span :style="{color:textColor}" class="subject-color">个性随意</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 2" ><span :style="{color:textColor}" class="subject-color">脚踏实地</span>是你的特质。</p>
            <p v-if="dataJson.tooThpaste == 3" ><span :style="{color:textColor}" class="subject-color">不拘⼩节</span>是你的特质。</p>
          </div>
          <div class="subject">
              <p v-if="dataJson.dosome <=13 ">确是<span :style="{color:textColor}" class="subject-color">好看</span>的你，</p>
              <p v-if="dataJson.dosome <=13 ">被⼈喜欢认同总能让你欣喜。</p>
              <p v-if="dataJson.dosome >13 ">确是<span :style="{color:textColor}" class="subject-color">⾃信</span>的你，</p>
              <p v-if="dataJson.dosome >13 ">不曾在意别⼈⽚⾯看法。</p>
          </div>
          <div class="subject">
              <p v-if="dataJson.try ==0 ">不喜欢过于困难挑战的你，</p>
              <p v-if="dataJson.try ==0 ">更享受⽣活的平淡乐，</p>
              <p v-if="dataJson.try <=9 && dataJson.try>=3 "><span :style="{color:textColor}" class="subject-color">好奇</span>的你，</p>
              <p v-if="dataJson.try <=9 && dataJson.try>=3 ">更想<span :style="{color:textColor}" class="subject-color">尝试新事物</span>也渴望得到帮助，</p>
              <p v-if="dataJson.try >9 ">富有<span :style="{color:textColor}" class="subject-color">冒险精神</span>的你，</p>
              <p v-if="dataJson.try >9 ">更喜欢不同常⼈的挑战，</p>

              <p v-if="dataJson.mustHave <12 ">也喜欢⽣活多⼀些<span :style="{color:textColor}" class="subject-color">仪式感</span>，</p>
              <p v-if="dataJson.mustHave <12 ">来增添⽣活的不经意的⼩确幸。</p>
              <p v-if="dataJson.mustHave >=12 ">也重视⽣活<span :style="{color:textColor}" class="subject-color">仪式感</span>，</p>
              <p v-if="dataJson.mustHave >=12 ">把每件事都做成值得回味的纪念。</p>
          </div>
          <div class="subject last">
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
            textColor:''
        }
    },
    beforeUpdate(){
        this.getColor()

    },
    created() {
        
    },
    methods: {
      getColor(){
          var textColorNum = this.dataJson.choiceColor;
          var textColorArr= ['#e79e92','#deb844','#679cb6','#9eb58d','#fb7472','#7ccbe2'];   
          this.textColor = textColorArr[textColorNum];
      }
    }
}
</script>
<style scoped>
.resultStyle{
    position: relative;
    margin-top: -.4rem;
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
    /* text-decoration: underline; */
}
.likeSpan{
    padding-bottom:4px;
    border-bottom: 2px solid #666;
}
.content{
    position: relative;
    margin-left:.07rem;
    -webkit-box-shadow: #ccc 4px 3px 5px;;
    -moz-box-shadow: #ccc 4px 3px 5px;;
    box-shadow: #ccc 4px 3px 5px;
    background: #fff;
    padding-bottom:.35rem;
    border:#eee 1px solid;
}
.outlineLeft{
    position: absolute;
    left:-.1rem;
    bottom:-.1rem;
    width:.04rem;
    height:3.6rem;
    /* background: #9eb58d; */
    z-index: 999;
}
.outlineBottom{
    position: absolute;
    left:-.1rem;
    bottom:-.1rem;
    width:2rem;
    height:.04rem;
    /* background: #9eb58d; */
    z-index: 989;
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
    padding-top:.25rem;
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
    color:#666;
}
.last {
    padding-right:.15rem;
}
</style>

