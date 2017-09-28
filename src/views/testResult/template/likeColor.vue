<template>
    <div class="resultStyle">
      <p class="likeTitle">我喜欢的颜色</p>
      <ul>
        <p class="titleLeft">{{message.dataList[result.choiceColor].name}}</p>
        <li>
            <div class="cont">
                <div class="imgWrap">
                    <img  v-lazy="'http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[result.choiceColor].src">

                </div>
            </div>
        </li>
      </ul>
      
    <div class="colorText">
        <p>{{message.dataText[result.choiceDraw].draw}}</p>
        <p>{{message.dataText[result.choiceDraw].draw1}}</p>
        <p>{{message.dataText[result.choiceDraw].pic}}</p>
        <p>{{message.dataText[result.choiceDraw].pic1}}</p>
    </div>
      
  </div>
</template>

<script>
export default {
    props: ['result'],
    data(){
        return{
            message: {
                dataList: [
                    {   
                        key:0,
                        name: '你喜欢淡山茱萸粉',
                        src: 'y-1.png',
                        choiced: false
                    },
                    {   
                        key:1,
                        name: '你喜欢樱草黄',
                        src: 'y-2.png',
                        choiced: false
                    },
                    {   
                        key:2,
                        name: '你喜欢尼加拉蓝',
                        src: 'y-3.png',
                        choiced: false
                    },
                    {   
                        key:3,
                        name: '你喜欢羽衣甘蓝绿',
                        src: 'y-4.png',
                        choiced: false
                    },
                    {   
                        key:4,
                        name: '你喜欢奥罗拉红',
                        src: 'y-5.png',
                        choiced: false
                    },
                    {   
                        key:5,
                        name: '你喜欢海岛天',
                        src: 'y-6.png',
                        choiced: false
                    }      
                ],
                dataText: [
                    {   
                        key:0,
                        draw: '喜欢⿊⽩灰⾊的你',
                        draw1:'与⽣俱来带有哲学家的沉静',
                        pic:'喜欢⾼⾊彩饱和度的你',
                        pic1:'喜欢复古神秘'
                    },
                    {   
                        key:1,
                        draw: '喜欢低彩度⾊的你',
                        draw1:'⼼思细腻偶尔也会胡思乱想',
                        pic:'喜欢低⾊彩饱和度的你',
                        pic1:'积极向上、充满活⼒'
                    },
                    {   
                        key:2,
                        draw: '喜欢中彩度⾊的你',
                        draw1:'喜欢简单思考、习惯凭直觉做事',
                        pic:'喜欢低⾊彩饱和度的你',
                        pic1:'积极向上、充满活⼒'
                    },
                    {   
                        key:3,
                        draw: '喜欢⾼彩度⾊的你',
                        draw1:'喜欢更纯粹的看待周遭的⼈事物',
                        pic:'喜欢低⾊彩饱和度的你',
                        pic1:'喜欢复古神秘'
                    }
                ],

            }
        }
    },
    mounted() {     
    },
    created(){
    },
    methods:{
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
    /* width:2.8rem; */
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


