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
            <transition name="fade">
                <img v-lazy="'static/images/desinerStyle/f-'+imgOrder+'.png'">
            </transition>
        </div>
        <div class="opacity">
            <div class="ceil">
                <img src="static/images/dislike.png" v-if="!dislike" @click="dislikeChoice">
                <img src="static/images/dislike-push.png" v-else>
            </div>
            <div class="ceil">
                <img src="static/images/no-feelings.png" v-if="!nofelling" @click="nofellingChoice">
                <img src="static/images/no-feelings-push.png" v-else>
            </div>
            <div class="ceil">
                <img src="static/images/like.png" v-if="!like" @click="likeChoice">
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
            northernEurope: 0,//北欧
            mediterraneanSea: 0,//地中海
            french: 0,//法式
            industrialWind: 0,//工业风
            europeanism: 0,//古典欧式
            beautifulSimplicity: 0,//简美
            janeEuropean: 0,//简欧
            lightLuxury: 0,//轻奢
            japanese: 0,//日式
            modern: 0,//现代
            countryStyle: 0,//乡村美式
            chineseStyle: 0,//中式
            imgOrder: 1,
            styleList: [
                {
                    classFily: [
                        { name: 'northernEurope', score: 1 }
                    ]
                }
            ]

        }
    },
    methods: {
        likeChoice() {
            this.choiceOption('like');
        },
        dislikeChoice() {
            this.choiceOption('dislike');
        },
        nofellingChoice() {
            this.choiceOption('nofelling');

        },
        choiceOption(btn) {
            if (!this.canClick) {
                return
            }
            var opt = {};
            if (btn == 'like') {
                this.like = true;
            } else if (btn == 'dislike') {
                this.dislike = true;
            } else {
                this.nofelling = true;
            }
            this.imgOrder += 1;
            this.canClick = false;
            this.imgOrder += 1;
            setTimeout(() => {
                this.canClick = true;
                this.like = false;
                this.dislike = false;
                this.nofelling = false;

            }, 200);
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0
}
</style>