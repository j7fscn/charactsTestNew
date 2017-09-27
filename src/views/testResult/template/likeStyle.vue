<template>
  <div class="resultStyle">
      <p class="likeTitle">你喜欢的风格</p>
      <ul>
          <p class="titleLeft">乡村田园美式</p>
            <li v-for="(item,index) in message.dataList">
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'../../static/images/result/'+item.src">
                    </div>
                </div>
            </li>
        </ul>

      <div class="mt40">
        <div class="bottom">
            <div  class="cont checked" @click="nextPage">进&nbsp;入&nbsp;设&nbsp;计&nbsp;IN</div>
        </div>
      </div>
      
  </div>
</template>
<script>
export default {
    name: 'likeStyle',
    props: ['likeStyle'],
    data(){
        return{
            message: {
                dataList: [
                    {
                        name: '窗帘',
                        src: 'l-1-1.png',
                        choiced: false
                    },
                    {
                        name: '餐桌',
                        src: 'l-1-2.png',
                        choiced: false
                    }       
                ],

            }
        }
    },
    mounted() {
    },
    methods:{
        nextPage(){
            console.log('进入设计IN')
        }
    }
}
</script>
<style>
.resultStyle{
    margin:0 .2rem;
}
.likeTitle{
    text-align: left;
    color:#666;
    line-height: .2rem;
    font-size: .2rem;
    text-decoration: underline;
}
.titleLeft{
    text-align: left;
    color:#222;
    line-height: .2rem;
    font-size: .2rem;
}
img{
    height: 1.5rem;
    width:2.8rem;
}
ul, li{
    margin:0.1rem 0;
    padding:0;
    list-style-type: none;
}
li{
    height: 1.5rem;
}
.mt40{
    margin-top:40px;
}
.bottom{
    position: relative !important;
}
</style>



