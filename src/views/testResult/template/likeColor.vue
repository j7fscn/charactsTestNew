<template>
    <div class="resultStyle">
      <p class="likeTitle">我喜欢的颜色</p>
      <ul>
        <p class="titleLeft">淡山茱萸粉</p>
        <li v-for="(item,index) in message.dataList">
            <div class="cont">
                <div class="imgWrap">
                    <img v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+item.src">
                </div>
            </div>
        </li>
        </ul>
    <div class="colorText">
        <p>你比较喜欢暖色系</p>
        <p>推荐工业风，黑色现代风</p>
        <p>你比较喜欢暖色系</p>
        <p>积极向上，充满活力</p>
    </div>
      
  </div>
</template>
<style scoped>
.resultStyle{
    margin-top: 1.1rem;
    margin-left:.2rem;

}
.colorText{
    margin-top:.35rem;
    text-align: left;
}
.colorText p{
    margin: 0;
    color: #666;
    line-height: .3rem;
    font-size: .16rem;
}
img{
    height: 1.5rem;
    width:2.8rem;
}
ul, li{
    margin:0;
    padding:0;
    list-style-type: none;
}
li{
    height: 1.5rem;
}
</style>
<script>
export default {
    name: 'likeColor',
    props: ['likeColor'],
    data(){
        return{
            message: {
                dataList: [
                    {
                        name: '窗帘',
                        src: 'y-1.png',
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


