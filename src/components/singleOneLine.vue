<template>
    <div :class="mes.dataList.length>=4?'double sing':'one sing'">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+mes.page/50*100+'%'"></div>
            </div>
            <span class="vl">{{mes.page}}/20</span>

        </div>
        <p class="tit">{{mes.tit}}</p>
        <ul>
            <li v-for="(item,index) in mes.dataList" @click="choice($event,index)">
                <div class="cont">
                    <div class="imgWrap">
                        <img :src="'./static/images/'+mes.imgPackage+'/'+item.src">
                        <div class="mask" v-if="item.choiced">
                            <div class="shadow"></div>
                            <div class="checked">
                                <img src="static/images/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
            <div v-if="checkedValue==-1" class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont checked" @click="setValue">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
         
        </div>
    </div>
</template>
<style>
/*common*/

.sing.one ul {
    margin: 0 .2rem;
}

.sing ul,
.sing li {
    list-style-type: none;
    margin: 0;
    padding: 0;
}


.sing .imgWrap {
    position: relative;
}

.sing .imgWrap img {
    width: 100%;
    border: #eee 1px solid;
    box-sizing: border-box;
    display: block;
    border-radius: .04rem;
}

.sing .tit {
    font-size: .17rem;
    margin: .15rem 0 .2rem .2rem;
    padding:0;
    color: #222;
    text-align: left;
}



/*common*/


/*mask*/

.sing .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 22;
    top: 0;
    border-radius: .04rem;
}

.sing .mask .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .14;
}

.sing .mask .checked {
    position: absolute;
    right: 0.15rem;
    bottom: .1rem;
    width: .2rem;
    z-index: 99;
    opacity: 1;
}

.sing .mask .checked img {
    width: 100%;
    border: none;
}



/*mask*/


/*double*/

.sing.double li {
    float: left;
    width: 50%;
}

.sing.double ul {
    margin: 0 .1rem;
}

.sing.double ul li .cont {
    margin: 0 .1rem;
}




/*double*/


/*progress*/

.progress {
    margin: .26rem .2rem 0 .2rem;
    overflow: hidden;
    text-align: right;
}

.sing .memo {
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

.sing .bottom {
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
<script>

export default {
    props: ['mes'],
    data() {
        return {
            checkedValue: -1,
        }
    },
    methods: {
        choice(e, index) {

            if (this.mes.dataList[index].choiced) {
                this.mes.dataList[index].choiced = false;
                this.checkedValue = -1;
                return

            }
            this.checkedValue = this.mes.dataList[index].key;
            this.mes.dataList[index].choiced = true;
            this.mes.dataList.forEach(function(k, i) {
                if (i != index) {
                    k.choiced = false;
                }

            })

        },
        setValue(){
            localStorage.setItem(this.mes.pageName,this.checkedValue);
             this.$router.push({ path: this.mes.nextPage});

        }
    }

}
</script>


