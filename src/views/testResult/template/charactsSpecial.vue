<template>
  <div class="resultStyle">
      <p class="likeTitle">我的性格特点 </p>
      <div class="content">
          <div class="subject">
              <!-- <span class="subject-color">言行一致</span> -->
              <p>{{message.titEleven[result.choiceDraw].name0}}</p>
              <p>{{message.titEleven[result.choiceDraw].name1}}</p>
              <p>{{message.titEleven[result.choiceDraw].name2}}</p>
          </div>
          <div class="subject">
              <p>{{message.titFour[result.tooThpaste].name0}}</p>
          </div>
          <div class="subject">
              <p v-if="result.dosome <=13 ">{{message.titSixteen[0].name1}}</p>
              <p v-if="result.dosome <=13 ">{{message.titSixteen[0].name2}}</p>
              <p v-if="result.dosome >13 ">{{message.titSixteen[1].name1}}</p>
              <p v-if="result.dosome >13 ">{{message.titSixteen[1].name2}}</p>
          </div>
          <div class="subject">
              <p v-if="result.try ==0 ">{{message.titFifteen[0].name1}}</p>
              <p v-if="result.try ==0 ">{{message.titFifteen[0].name2}}</p>
              <p v-if="result.try <=9 ">{{message.titFifteen[1].name1}}</p>
              <p v-if="result.try <=9 ">{{message.titFifteen[1].name2}}</p>
              <p v-if="result.try >9 ">{{message.titFifteen[2].name1}}</p>
              <p v-if="result.try >9 ">{{message.titFifteen[2].name2}}</p>

              <p v-if="result.mustHave <12 ">{{message.titFourteen[0].name1}}</p>
              <p v-if="result.mustHave <12 ">{{message.titFourteen[0].name2}}</p>
              <p v-if="result.mustHave >=12 ">{{message.titFourteen[1].name1}}</p>
              <p v-if="result.mustHave >=12 ">{{message.titFourteen[1].name2}}</p>
          </div>
          <div class="subject">
              <p>-设计IN</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    // name: 'charactsSpecial',
    props: ['result1'],
    data(){
        return{
            message: {
                titEleven: [
                    {
                        name0: '你是个⾔⾏⼀致的⼈，',
                        name1: '不念过去也不畏将来，',
                        name2: '冷静地⾯对处理⼈⽣中的变化',            
                    },
                    {
                        name0: '你是个⼼细如发，',
                        name1: '别⼈的看法很重要，',
                        name2: '也渴望得到真挚的认可和理解。',     
                    },
                    {
                        name0: '你是个统领⼤局的⼈，',  
                        name1: '被动等待不是你的作⻛，',
                        name2: '总是能把握趋势去制定计划。',            
                    },
                    {
                        name0: '你是个性情豪爽的⼈，', 
                        name1: '身边的⼈喜欢你的开朗⼤⽅，',
                        name2: '⼈群中的你都是焦点。',     
                    },
                    {
                        name0: '你是个严于律⼰的⼈',
                        name1: '快速地适应多变的环境，',
                        name2: '也很清楚⾃⼰想要什么。',            
                    },
                    {
                        name0: '你是个追求⾃由的⼈，', 
                        name1: '抗拒着⼀成不变的⽣活，',
                        name2: '不可预知的未来是你的向往。',     
                    }       
                ],
                titFour: [
                    {
                        name0: '谨慎⼩⼼是你的特质。',
                              
                    },
                    {
                        name0: '个性随意是你的特质。',
                    },
                    {
                        name0: '脚踏实地是你的特质。',  
                               
                    },
                    {
                        name0: '不拘⼩节是你的特质。', 
                  
                    }
                ],
                titSixteen:[
                    {                     
                        name1: '确是⾃信的你，',
                        name2: '不曾在意别⼈⽚⾯看法。',            
                    },
                    {
                        name1: '确是好看的你，',
                        name2: '被⼈喜欢认同总能让你欣喜。',     
                    }    
                ],
                titFifteen:[
                    {                     
                        name1: '不喜欢过于困难挑战的你，',
                        name2: '更享受⽣活的平淡乐，',            
                    },
                    {                     
                        name1: '好奇的你,',
                        name2: '更想尝试新事物也渴望得到帮助，',            
                    },
                    {
                        name1: '富有冒险精神的你，',
                        name2: '更喜欢不同常⼈的挑战，',     
                    } 
                ],
                titFourteen:[
                    {                     
                        name1: '也喜欢⽣活多⼀些仪式感，',
                        name2: '来增添⽣活的不经意的⼩确幸。',            
                    },
                    {
                        name1: '也重视⽣活仪式感，',
                        name2: '把每件事都做成值得回味的。',     
                    } 
                ]

            }
        }
    },
   mounted(){
        console.log(this.result1,'tj')
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
    color:#9eb58d;
;
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

