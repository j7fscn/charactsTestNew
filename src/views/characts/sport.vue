<template>
    <div class="mulSelect sing">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+message.pageProgress/20*100+'%'"></div>
            </div>
            <span class="vl">{{message.page}}/24</span>

        </div>
        <p class="tit">{{message.tit}}</p>
        <ul>
            <li v-for="(item,index) in message.dataList" @click="choice($event,index)">
                <div class="cont">
                    <div class="imgWrap">
                        <img :src="'http://owxa0vmjl.bkt.clouddn.com/characts'+item.src">
                        <div class="mask" v-if="item.choiced">
                            <div class="shadow"></div>
                            <div class="checked">
                                <img src="http://owxa0vmjl.bkt.clouddn.com/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
             <div v-if="score[1]>0"  class="cont checked" @click="goNextPage">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
           
         
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: [0,0],
            checkedValue:-1,
            nextKey:'nextKey',
            currentKey:'',
             message: {
                tit: '你比较喜欢哪些运动（多选）',
                dataList: [
                    {
                        key: 0,
                        score:[0, 4],
                        name: '拳击',
                        src: '17-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        score:[3, 5],
                        name: '羽毛球',
                        src: '17-2-1.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        score:[5, 5],
                        name: '篮球',
                        src: '17-3-1.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        score:[0, 1],
                        name: '跑步',
                        src: '17-4-1.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        score:[5, 5],
                        name: '足球',
                        src: '17-5-1.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        score:[0, 1],
                        name: '健身',
                        src: '17-6-1.png',
                        choiced: false
                    },
                   
                ],
                page: 20,
                pageProgress:17,
                imgPackage: 'characts',
                pageName:'sport',
                nextPage:'/choiceColor'
            }
        }
    },
    created() {
        // this.getUserData();
    },
    mounted() {
        this.wxShareApi.getId(this);
        this.wxShareApi.shareReady();
        this.currentKey = this.message.pageName;
    },
    methods: {
        choice(e, index) {
             var _self =this
            if (this.message.dataList[index].choiced) {              
                this.message.dataList[index].choiced = false
                this.score[0]-=this.message.dataList[index].score[0]
                this.score[1]-=this.message.dataList[index].score[1]          
                return
            }
            this.checkedValue = this.message.dataList[index].key
            this.message.dataList[index].choiced = true
            this.score[0]+=this.message.dataList[index].score[0]
            this.score[1]+=this.message.dataList[index].score[1]
            console.log(this.score)
            // this.checkedValue = 1
        },
        goNextPage() {
            this.getUserData();
          
        },
        getUserData() {
            var _self = this;
            this.$store
                .dispatch("GetusrMes", this.$route.params.userid)
                .then(() => {
                var json = _self.$store.getters.userMes;
                _self.dataJson = json;
                _self.setUserData();
            })
            .catch(err => {
                console.log(err);
            });
        },
        setUserData() {
            var _self = this;
            this.dataJson[this.currentKey] = this.score;
            this.nextKey = this.message.nextPage;
            this.$store
                .dispatch("SetUsrMes", _self.dataJson)
                .then(() => {
                _self.$router.push({
                    path: _self.message.nextPage + "/" + _self.$route.params.userid
                });
                })
                .cath(err => {
                console.log(err);
            });
        }
        
    }

}
</script>



<style scoped>
/*common*/

.mulSelect ul {
    margin: 0 .2rem;
}

.mulSelect ul,
.mulSelect li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.mulSelect  li {
    float: left;
    width: 50%;
}
.mulSelect .imgWrap {
    position: relative;
}

.mulSelect .imgWrap img {
    width: 100%;
    border: #eee 1px solid;
    box-sizing: border-box;
    display: block;
    border-radius: .04rem;
}

.mulSelect .tit {
    font-size: .17rem;
    margin: .15rem 0 .2rem .2rem;
    padding:0;
    color: #222;
    text-align: left;
}



/*common*/


/*mask*/

.mulSelect .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 22;
    top: 0;
    border-radius: .04rem;
}

.mulSelect .mask .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .14;
}

.mulSelect .mask .checked {
    position: absolute;
    right: 0.15rem;
    bottom: .1rem;
    width: .2rem;
    z-index: 99;
    opacity: 1;
}

.mulSelect .mask .checked img {
    width: 100%;
    border: none;
}



/*mask*/


/*double*/

.sing.double li {
    float: left;
    width: 50%;
}

.mulSelect ul {
    margin: 0 .1rem;
}

.mulSelect ul li .cont {
    margin: 0 .1rem;
}




/*double*/


/*progress*/

.progress {
    margin: .26rem .2rem 0 .2rem;
    overflow: hidden;
    text-align: right;
}

.mulSelect .memo {
    margin: .06rem 0 .15rem 0;
    color: #666;
}

.progress .bar {
    float:left;
    margin-right:.55rem;
    display: inline-block;
    height: .02rem;
    width:85%;
    background: #eeeeee;
    border-radius: .04rem;

    margin-top:.04rem;
}

.progress .bar .complete {
    height: .02rem;
    background: #43bb57;
    border-radius: .04rem;
}

.progress .vl {
      float:right;
    color: #999;
    font-size: .12rem;
    margin-top:-.08rem;
}

.mulSelect .bottom {
    position: fixed;
    bottom: .08rem;
    width: 100%;
}

.bottom .cont {
    margin: 0 .2rem .15rem .2rem;
    color: #fff;
    font-size: .17rem;
    border-radius: .04rem;
    line-height: .44rem;
    height: .44rem;
    background: #9c9c9c;
}

.bottom .cont.checked {
    background: #43bb57;
}
</style>







