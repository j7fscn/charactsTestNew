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
            <div class="cont">
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
            currentKey: 'likeStyle',
            fisrtStyle: '',
            secondStyle: '',
            checkedValue: -1,
            styleScore: {
                northernEurope: { score: 0, alias: "北欧" },
                mediterraneanSea: { score: 0, alias: "地中海" },
                french: { score: 0, alias: "法式" },
                industrialWind: { score: 0, alias: "工业风" },
                europeanism: { score: 0, alias: "古典欧式" },
                beautifulSimplicity: { score: 0, alias: "简美" },
                janeEuropean: { score: 0, alias: "简欧" },
                lightLuxury: { score: 0, alias: "轻奢" },
                japanese: { score: 0, alias: "日式" },
                modern: { score: 0, alias: "现代" },
                countryStyle: { score: 0, alias: "乡村美式" },
                chineseStyle: { score: 0, alias: "中式" },
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

            ],
            pageName: 'likeStyle',
            nextPage: '/result'

        }
    },
    created() {
        this.$bridge.registerHandler("refreshPage", function() {
            document.location.reload();
        });
        this.getUserData();
    }
    ,
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
            var _self = this;
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
            setTimeout(function() {
                if (_self.imgOrder == 30) {
                    _self.maxScore();
                    _self.$router.push({ path: './result' });
                }
            }, 50);
            setTimeout(() => {
                this.fadeOut = true;
            }, 100);
            setTimeout(function() {
                if (_self.imgOrder == 31) {
                    _self.maxScore();
                    _self.$router.push({ path: './result' });
                }
                _self.like = false;
                _self.dislike = false;
                _self.nofelling = false;
                _self.canClick = true;
            }, 500);
        },
        addScore(percent) {

            var _self = this;
            var items = this.styleList[this.imgOrder - 1].classFily;
            items.forEach(function(element) {
                _self.styleScore[element.name].score += element.score * percent;

            });
        },
        maxScore() {    /*第一风格*/
            var max = 0;
            var maxstyle = '';
            for (var o in this.styleScore) {
                if (max < this.styleScore[o].score) {
                    max = this.styleScore[o].score;
                    maxstyle = this.styleScore[o].alias;
                }
            }
            this.fisrtStyle = maxstyle;
            this.secondMax();
        },
        secondMax() {    /*第二风格*/
            var second = 0;
            var secondStyle = '';
            for (var o in this.styleScore) {

                if (second < this.styleScore[o].score && (this.styleScore[o].alias != this.fisrtStyle)) {
                    second = this.styleScore[o].score;
                    secondStyle = this.styleScore[o].alias;
                }
            }
            this.secondStyle = secondStyle;
            this.setUserData();
            this.currentKey=[this.fisrtStyle,this.secondStyle];
            debugger
            
            this.$bridge.callHandler('callWithDict', { 'testResult': { style: [this.fisrtStyle, this.secondStyle], area: '中型' } }, function(data) {


            });
            console.log(this.fisrtStyle, this.secondStyle);
        },
        getUserData() {
            var _self = this;
            let urlG = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid)
            this.$jsonp(urlG).then(json => {
                this.dataJson = json.data.result
            }).catch(err => {
                console.log(err)
            })
        },
        setUserData() {
            var _self = this;
            var data = '';
            if (!this.dataJson) {
                data = 'user_id=' + this.$route.params.userid + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.nextPage;

            } else {
                data = this.dataJson + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.nextPage
            }
            var strToJson = this.parseQueryString(data)
            var str = ''
            for (let i in strToJson) {
                if (i == this.currentKey) {
                    strToJson[i] = this.checkedValue
                }
                str += i + '=' + strToJson[i] + '&'
            }
            str = str.substring(0, str.length - 1)
            var url = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult?' + str
            this.$jsonp(url).then(json => {

            }).catch(err => {
                console.log(err)
            })
        },
        parseQueryString(url) {
            var obj = {};
            var keyvalue = [];
            var key = "", value = "";
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
            for (var i in paraString) {
                keyvalue = paraString[i].split("=");
                key = keyvalue[0];
                value = keyvalue[1];
                obj[key] = value;
            }
            return obj;
        },


    }

}
</script>

<style>
.pageDesinerStyle {
    position: relative;
}




.pageDesinerStyle .opacity {

    bottom: .2rem;
    width: 100%;
    position: fixed;
}

.pageDesinerStyle .opacity .cont {
    display: flex;
    margin: 0 .45rem;
    flex-direction: row;
    justify-content: space-around;
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
    position: relative;
}

.pageDesinerStyle .ceil img {
    width: 100%;
}

.imgAimate {
    animation: myfirst .5s;
}

.postApp {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    ;
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