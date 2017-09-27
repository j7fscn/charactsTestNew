<template>
    <div class="resultStyle">
      <p class="likeTitle">我喜欢的颜色</p>
      <ul>
        <p class="titleLeft">淡山茱萸粉</p>
        <li v-for="(item,inde x) in message.dataList">
            <div class="cont">
                <div class="imgWrap">
                    <img v-lazy="'../../static/images/result/'+item.src">
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
<style scoped>
.resultStyle{
    margin:0 .2rem;

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





