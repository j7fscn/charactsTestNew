<template>
    <div class="resultStyle">
        <p class="likeTitle"><span class="likeSpan">我喜欢的风格</span></p>
        <ul class="list">
            <p class="titleLeft">{{likeStyle[0]}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate1" v-bind:class="[imgAnimate[1].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[0] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src"></div>

                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate2" v-bind:class="[imgAnimate[2].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[0] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src1"></div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <p class="titleLeft">{{likeStyle[1]}}</p>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate3" v-bind:class="[imgAnimate[3].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[1] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src"></div>
                    </div>
                </div>
            </li>
            <li>
                <div class="cont">
                    <div class="imgWrap">
                        <div id="imgAnimate4" v-bind:class="[imgAnimate[4].isShow ? 'isShow' : '', 'imgAnimate']" v-if="strArr[1] == index" v-for="(item, index) in message.dataList" v-bind:style="'background-image:url(http://owxa0vmjl.bkt.clouddn.com/style'+message.dataList[index].src1"></div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="mt40">
            <div class="btn">
                <router-link to="/shareStart" v-if="isShare">
                    <a class="cont">我&nbsp;要&nbsp;测&nbsp;试</a>
                </router-link>

                <div class="cont" @click="postResult" v-else>进&nbsp;入&nbsp;设&nbsp;计&nbsp;IN</div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'likeStyle',
    props: ['dataJson', 'imgAnimate'],

    data() {
        return {
            isShare: false,
            strArr: [],
            likeStyle: [],
            message: {
                dataList: [
                    {
                        name: '北欧',
                        src: 'l-1-1.png',
                        src1: 'l-1-2.png',
                    },
                    {
                        name: '日式',
                        src: 'l-2-1.png',
                        src1: 'l-2-2.png',
                    },
                    {
                        name: '地中海',
                        src: 'l-3-1.png',
                        src1: 'l-3-2.png',
                    },
                    {
                        name: '中式',
                        src: 'l-4-1.png',
                        src1: 'l-4-2.png',
                    },
                    {
                        name: '轻奢',
                        src: 'l-5-1.png',
                        src1: 'l-5-2.png',
                    },
                    {
                        name: '乡村美式',
                        src: 'l-6-1.png',
                        src1: 'l-6-2.png',
                    },
                    {
                        name: '现代美式',
                        src: 'l-7-1.png',
                        src1: 'l-7-2.png',
                    },
                    {
                        name: '现代简约',
                        src: 'l-8-1.png',
                        src1: 'l-8-2.png',
                    },
                    {
                        name: '法式',
                        src: 'l-9-1.png',
                        src1: 'l-9-2.png',
                    },
                    {
                        name: '工业风',
                        src: 'l-10-1.png',
                        src1: 'l-10-2.png',
                    },
                    {
                        name: '古典欧式',
                        src: 'l-11-1.png',
                        src1: 'l-11-2.png',
                    },
                    {
                        name: '简欧',
                        src: 'l-12-1.png',
                        src1: 'l-12-2.png',
                    }

                ]

            }
        }
    },
    mounted() {
        this.shareDuge();
        setTimeout(() => {
            this.allStyle();
        }, 500);
    },

    created() {
        this.$bridge.callHandler('enterLastPage', { 'testResult': { result: 1 } }, function(data) {

        });
    },
    methods: {
        allStyle() {
            this.strArr = decodeURIComponent(this.dataJson.likeStyle).split(",");
            this.strArr[0] = decodeURIComponent(this.strArr[0]);
            this.likeStyle[0] = decodeURIComponent(this.strArr[0]);
            this.strArr[1] = decodeURIComponent(this.strArr[1]);
            this.likeStyle[1] = decodeURIComponent(this.strArr[1]);
            var styleAll = ['北欧', '日式', '地中海', '中式', '轻奢', '乡村美式', '简美', '现代', '法式', '工业风', '古典欧式', '简欧'];
            styleAll.forEach((item, index) => {
                if (this.strArr[0] == item) {
                    this.strArr[0] = index
                }
                if (this.strArr[1] == item) {
                    this.strArr[1] = index
                }
            });
        },
        shareDuge() {
            if (window.location.href.lastIndexOf('shareResult') != -1) {
                this.isShare = true;
            }
        },

        postResult() {
            var _likeStyle = decodeURIComponent(this.dataJson.likeStyle).split(',');
             console.log({ likeStyle: _likeStyle, houseArea: decodeURIComponent(this.dataJson.houseArea), result: 1 });
            this.$bridge.callHandler('callWithDict', { 'testResult': { likeStyle: _likeStyle, houseArea: decodeURIComponent(this.dataJson.houseArea), result: 1 } }, function(data) {
            });

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
<style scoped>
.resultStyle {
    margin-top: 1rem;
    margin-left: .1rem;
    margin-right: .1rem;
}

.resultStyle .likeTitle {
    margin-top: 0;
    margin-bottom: .4rem;
    text-align: left;
    color: #666;
    line-height: .2rem;
    font-size: .2rem;
    /* text-decoration: underline; */
}
.likeSpan{
    padding-bottom:4px;
    border-bottom: 2px solid #666;
}
.titleLeft {
    margin-top: .4rem;
    margin-bottom: .2rem;
    text-align: left;
    color: #222;
    line-height: .2rem;
    font-size: .2rem;
}

img {
    width: 100%;
    display: block;
}

.list,
.list li {
    padding: 0;
    list-style-type: none;
}

.list li {
    margin: 0.1rem 0;
}

.cont {
    width: 100%;
}

.mt40 {
    margin-top: 40px;
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

.btn a.cont {
    display: inline-block;
    text-decoration: none;
}
</style>



