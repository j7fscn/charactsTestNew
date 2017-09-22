<template>
    <div >
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
                      
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
        
            <div  class="cont checked" @click="nextPage">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>

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
    padding: 0;
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




</style>
<script>

export default {
    props: ['mes'],
    data() {
      
    },
    mounted(){
       
       
    },
    methods: {
     nextPage(){
         
     }
    }

}
</script>


