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
       <ul>
          <p class="titleLeft">现代美式</p>
            <li v-for="(item,index) in message.dataList">
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'../../static/images/result/'+item.src">
                    </div>
                </div>
            </li>
       </ul> 

      <div class="mt40">
        <div class="btn">
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
<style scoped>
.resultStyle{
    margin-top: 1.1rem;
    margin-left:.2rem;
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
.titleLeft{
    margin-top:0;
    margin-bottom: .2rem;
    text-align: left;
    color:#222;
    line-height: .2rem;
    font-size: .2rem;
}
img{
    height: 1.5rem;
}
ul, li{
    margin:0.1rem 0;
    padding:0;
    list-style-type: none;
}
li{
    height: 1.5rem;
}
.cont{
    width:100%;
}
.mt40{
    margin-top:40px;
}
.btn {
    position: relative;
    bottom: .08rem;
    width: 100%;
}

.btn .cont {
    /* margin: 0 .2rem .15rem .2rem; */
    color: #fff;
    font-size: .17rem;
    border-radius: .04rem;
    line-height: .44rem;
    height: .44rem;
    background: #43bb57;
}

</style>



