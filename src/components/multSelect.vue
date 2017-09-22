<template>
    <div class="double sing">
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
                        <img v-lazy="'./static/images/'+mes.imgPackage+'/'+item.src">
                        <div class="mask" v-if="item.choiced">
                            <div class="shadow"></div>
                            <div class="checked">
                                <img lazy src="static/images/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
             <div v-if="score>0"  class="cont checked" @click="goNextPage">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
           
         
        </div>
    </div>
</template>
<style>



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


.mulSelect .bottom {
    position: fixed;
    bottom: .08rem;
    width: 100%;
}

</style>
<script>

export default {
    props: ['mes'],
    data() {
        return {
            score: 0,
        }
    },
    methods: {
        choice(e, index) {
            if (this.mes.dataList[index].choiced) {
                this.mes.dataList[index].choiced = false;
                this.score-=this.mes.dataList[index].score;
              
                return
            }
            this.checkedValue = this.mes.dataList[index].key;
            this.mes.dataList[index].choiced = true;
            this.score+=this.mes.dataList[index].score;

        },
        goNextPage(){

            localStorage.setItem(this.mes.pageName,this.score);
            this.$router.push({ path: this.mes.nextPage});
        }
    }

}
</script>


