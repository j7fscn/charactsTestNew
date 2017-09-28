<template>
  <div class="resultStyle">
      <p class="likeTitle">你喜欢的风格</p>
      <ul>
          <p class="titleLeft">{{}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[1].src">
                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[1].src">
                    </div>
                </div>
            </li>
       </ul>
       <ul>
          <p class="titleLeft">{{strArr[1]}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[0].src">
                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[0].src">
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
   props: ['result'],
    data(){
        return{
            strArr:[],
            message: {
                dataList: [
                    {
                        name: '窗帘',
                        src: 'l-1-1.png',
                        src1: 'l-1-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-2-1.png',
                        src1: 'l-2-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-3-1.png',
                        src1: 'l-3-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-4-1.png',
                        src1: 'l-4-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-5-1.png',
                        src1: 'l-5-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-6-1.png',
                        src1: 'l-6-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-7-1.png',
                        src1: 'l-7-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-8-1.png',
                        src1: 'l-8-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-9-1.png',
                        src1: 'l-9-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-10-1.png',
                        src1: 'l-10-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-11-1.png',
                        src1: 'l-11-2.png',
                    },
                    {
                        name: '窗帘',
                        src: 'l-12-1.png',
                        src1: 'l-12-2.png',
                    }
                          
                ]

            }
        }
    },
    mounted() {
         console.log(this.result,'tj')
    },
    created(){
        // var styleStr = result.likeStyle
        // strArr  = styleStr.split(",")
        // strArr[0]=decodeURIComponent(strArr[0])
        // strArr[1]=decodeURIComponent(strArr[1])
    },
    methods:{
        nextPage(){

        },
        postResult(){
            var _likeStyle=decodeURIComponent(this.result.likeStyle).split(',');
           this.$bridge.callHandler('callWithDict', { 'testResult': { likeStyle: _likeStyle, houseArea: decodeURIComponent(this.result.houseArea),result:1 } }, function(data) {

            });

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



