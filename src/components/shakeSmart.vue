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
                        <img :src="'./static/images/'+mes.imgPackage+'/'+item.src">
                      
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
        
            <div  class="cont checked" @click="nextPage">记&nbsp;&nbsp;住&nbsp;&nbsp;了</div>

        </div>
    </div>
</template>
<style>




</style>
<script>

export default {
    props: ['mes'],
    data() {
        return {

        }
      
    },
    mounted(){
       
       
    },
    methods: {
     nextPage(){
          this.$router.push({ path: this.mes.nextPage});

     }
    }

}
</script>


