<template>
    <div class="pageDesinerStyle">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+5/50*100+'%'"></div>
            </div>
            <span class="vl">2/20</span>

        </div>
        <p class="tit">选择您喜欢的风格</p>
        <div class="imgWrap">
            <img src="static/images/desinerStyle/f-1.png">
        </div>
        <div class="opacity">
            <div class="ceil">
                <img src="static/images/dislike.png" v-if="!dislike" @click="dislike">
                <img src="static/images/dislike-push.png" v-else>
            </div>
            <div class="ceil">
                <img src="static/images/no-feelings.png" v-if="!dislike" @click="nofelling">
                <img src="static/images/no-feelings-push.png" v-else>
            </div>
            <div class="ceil">
                <img src="static/images/like.png" v-if="!dislike" @click="like">
                <img src="static/images/like-push.png" v-else>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            canClick: true,
            dislike: false,
            nofelling: false,
            like: false,
            northernEurope:0,//北欧
            mediterraneanSea:0,//地中海
            french:0,//法式
            industrialWind:0,//工业风
            europeanism:0,//古典欧式
            beautifulSimplicity:0,//简美
            janeEuropean:0,//简欧
            lightLuxury:0,//轻奢
            japanese:0,//日式
            modern:0,//现代
            countryStyle:0,//乡村美式
            chineseStyle:0,//中式
            styleList:[
                {
                    classFily:[
                        {name:'northernEurope',score:1}
                    ]
                }
            ]

        }
    },
    methods:{
        like(){

        },
        dislike(){

        },
        nofelling(){

        }
    }

}
</script>

<style>
.pageDesinerStyle {
    position: relative;
}




.pageDesinerStyle .opacity {
    margin: 0 .45rem;
    bottom: .2rem;
    display: flex;
    position: fixed;
}



.pageDesinerStyle .imgWrap {
    margin: .18rem .2rem 0 .2rem;
}

.pageDesinerStyle .imgWrap img {
    width: 100%;
}

.pageDesinerStyle .ceil {
    width: .75rem;
}

.pageDesinerStyle .ceil img {
    width: 100%;
}
</style>