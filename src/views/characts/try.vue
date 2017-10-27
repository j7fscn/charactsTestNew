<template>
    <div class="mulSelect sing">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+message.page/24*100+'%'"></div>
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
             <div v-if="score>0 || checkedValue ==1 "  class="cont checked" @click="setValue">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
           
         
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            score:0,
            dataJson: '',
            currentKey: '',
            nextKey:'nextKey',
            checkedValue:-1,
            message: {
                tit: '你想尝试什么（多选）',
                
                dataList: [
                    {
                        key: 0,
                        name: '滑翔伞',
                        src: '15-1.png',
                        choiced: false,
                        score:5,
                    },
                    {
                        key: 1,
                        name: '攀岩',
                        src: '15-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '蹦极',
                        src: '15-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '走沙漠',
                        src: '15-4.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 4,
                        name: '冲浪',
                        src: '15-5.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 5,
                        name: '都不想',
                        src: '15-6.png',
                        choiced: false,
                        score:0
                    }
                ],
                page: 18,
                pageProgress:15,
                imgPackage: 'characts',
                pageName:'try',
                nextPage:'/dosome'
            }
        }
    },
    // created() {
    //     this.getUserData();
    // },
    mounted() {
        this.currentKey = this.message.pageName;
    },
    methods: {
        choice(e, index) {
            if (this.message.dataList[index].choiced) {
                if(index != 5){
                     this.message.dataList[5].choiced = false   
                     this.checkedValue=-1
                }
                this.message.dataList[index].choiced = false
                this.score-=this.message.dataList[index].score
                // return
            }
            else{
                if(index != 5){
                    this.message.dataList[5].choiced = false
                    this.checkedValue=-1
                }
                this.message.dataList[index].choiced = true
                this.score+=this.message.dataList[index].score
            }
            if(this.message.dataList[index].choiced && index == 5 ){
                   this.message.dataList.forEach(function(msg, index){
                        msg.choiced = false
                    })
                this.message.dataList[index].choiced = true
                this.score = 0  
                this.checkedValue=1
            }else{
                this.checkedValue=-1
            }
        },
        setValue() {
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

        // getUserData() {
        //     let urlG = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id='+this.$route.params.userid)
        //     this.$jsonp(urlG).then(json => {
        //         this.dataJson=json.data.result
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // },
        // setUserData() {
        //     var data= this.dataJson + '&' + this.currentKey + '=' + this.score + '&' + this.nextKey + '=' + this.message.nextPage   
        //     console.log(data)
        //     var strToJson = this.parseQueryString(data)
        //     var str =''
        //     for(let i in strToJson){
        //         if(i == this.currentKey){
        //             strToJson[i] = this.score
        //         }
        //         str += i + '=' +strToJson[i] + '&'
        //     }
        //     str = str.substring(0, str.length - 1)
        //     var _self =this
        //     var url = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult?' + str
        //     this.$jsonp(url).then(json => {
        //         _self.$router.push({ path: _self.message.nextPage+'/'+_self.$route.params.userid });
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // },
        // //字符串转JSON
        // parseQueryString(url) {
        //     var obj={};
        //     var keyvalue=[];
        //     var key="",value=""; 
        //     var paraString=url.substring(url.indexOf("?")+1,url.length).split("&");
        //     for(var i in paraString)
        //     {
        //         keyvalue=paraString[i].split("=");
        //         key=keyvalue[0];
        //         value=keyvalue[1];
        //         obj[key]=value; 
        //     } 
        //     return obj;
        // }
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





