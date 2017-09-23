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
                <img v-lazy="'static/images/desinerStyle/f-'+imgOrder+'.png'" :class="{imgAimate:fadeOut}">
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
            fadeOut: false,
            canClick: true,
            dislike: false,
            nofelling: false,
            like: false,
            fisrtStyle: '',
            secondStyle: '',
            styleScore: {
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
            },
            imgOrder: 1,
            styleList: [
                {
                    classFily: [
                        { name: 'northernEurope', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'northernEurope', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'mediterraneanSea', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'mediterraneanSea', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'french', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'french', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'industrialWind', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'industrialWind', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'europeanism', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'europeanism', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'beautifulSimplicity', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'beautifulSimplicity', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'janeEuropean', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'janeEuropean', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'lightLuxury', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'lightLuxury', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'japanese', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'japanese', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'modern', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'modern', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'countryStyle', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'countryStyle', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'chineseStyle', score: 1 }
                    ]
                },
                {
                    classFily: [
                        { name: 'mediterraneanSea', score: .11 },
                        { name: 'countryStyle', score: .55 },
                        { name: 'beautifulSimplicity', score: .34 }
                    ]
                },
                {
                    classFily: [
                        { name: 'french', score: .94 },
                        { name: 'lightLuxury', score: .2 },
                    ]
                },
                {
                    classFily: [
                        { name: 'northernEurope', score: .17 },
                        { name: 'lightLuxury', score: .57 },
                        { name: 'europeanism', score: .9 }
                    ]
                },
                {
                    classFily: [
                        { name: 'lightLuxury', score: .6 },
                        { name: 'mediterraneanSea', score: .27 },
                        { name: 'europeanism', score: .13 }
                    ]
                },
                {
                    classFily: [
                        { name: 'modern', score: .65 },
                        { name: 'chineseStyle', score: .35 },

                    ]
                },
                {
                    classFily: [
                        { name: 'beautifulSimplicity', score: .8 },
                        { name: 'lightLuxury', score: .15 },
                        { name: 'northernEurope', score: .05 }
                    ]
                },
                {
                    classFily: [
                        { name: 'japanese', score: 1 }
                    ]
                },

            ]

        }
    },
    methods: {
        likeChoice() {
            this.addScore(1);
            this.choiceOption('like');
        },
        dislikeChoice() {
            this.addScore(0);
            this.choiceOption('dislike');
        },
        nofellingChoice() {
            this.addScore(0.05);
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
            this.fadeOut = false;
            this.imgOrder += 1;
            this.canClick = false;


            setTimeout(() => {
                
                this.fadeOut = true;

            }, 100);

            setTimeout(() => {
                if (this.imgOrder >= 30) {
                    this.maxScore();
                    this.$router.push({ path: './result' });
                }
                this.like = false;
                this.dislike = false;
                this.nofelling = false;
                this.canClick = true;

            }, 500);

        },
        addScore(percent) {
            var items = this.styleList[this.imgOrder - 1].classFily;
            items.forEach((element) => {
                this.styleScore[element.name] += element.score * percent;

            });
        },

        maxScore() {    /*第一风格*/
            var max = 0;
            var maxstyle = '';
            for (var o in this.styleScore) {
                if (max < this.styleScore[o]) {
                    max = this.styleScore[o];
                    maxstyle = o;
                }
            }

            this.fisrtStyle = maxstyle;
            this.secondMax();
        },
        secondMax() {    /*第二风格*/
            var second = 0;
            var secondStyle = '';
            for (var o in this.styleScore) {
                if (second < this.styleScore[o] && (o != this.fisrtStyle)) {
                    second = this.styleScore[o];
                    secondStyle = o;
                }
            }
            this.secondStyle = secondStyle;
            console.log(this.fisrtStyle, this.secondStyle);
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
    transition-duration: 2s
}

.pageDesinerStyle .ceil {
    width: .75rem;
}

.pageDesinerStyle .ceil img {
    width: 100%;
}

.imgAimate {
    animation: myfirst .5s;
}

@keyframes myfirst {
    from {
        margin-left: 100%;
        opacity: 0;
        transform: rotateX(45deg);
        transform: rotateY(45deg);
    }
    to {
        width: 100%;
        opacity: 1;
        transform: rotateX(0deg);
        transform: rotateY(0deg);
    }
}
</style>