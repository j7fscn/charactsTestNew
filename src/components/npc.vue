<template>
    <div class="bg">
        <div class="cont">
            <div class="shadow">
                <p class="tit" v-html="mes.title"></p>
                <span class="btn" @click="nextPage">
                    <span class="circle"></span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['mes'],
    data(){
        return {
            dataJonp:{},
        }
    },
    methods: {
        nextPage(){
            if(this.$route.fullPath=="/shareStart"){
                this.$router.push({ path: this.mes.nextPage});
                return
            }
            this.$router.push({ path: this.mes.nextPage+'/'+this.$route.params.userid});
        },
    
    }
}
</script>
<style scoped>
.bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('http://ovfllimsi.bkt.clouddn.com/npc_bg_new@3x.png');
    background-size: 100% 100%;
}

.cont {
    position: fixed;
    bottom: .2rem;
   width:96%;
   margin-left:2%;
}

.shadow {
    position: relative;
    width: 100%;
    height: 2.4rem;
    background: url('http://owxa0vmjl.bkt.clouddn.com/background_under@3x.png');
    background-size: 100% 100%;
    color: #6C9258;
    display: table;
   
}

.tit {
    display: table-cell;
    vertical-align: middle;
    margin: 0;
    font-size: .16rem;
    line-height: 1.6em;
    text-align: center;
}

.btn {
     position: absolute;
    display: inline-block;
    width: .6rem;
    height: .6rem;
    bottom: .1rem;
    left: 50%;
    margin-left: -.3rem;
}
.circle {
    width: 0.44rem;
    height: 0.44rem;
    display: inline-block;
    /* background: url(http://ovfllimsi.bkt.clouddn.com/NPCButton@3x.png) 0% 0% / 100% 100%; */
    background: url(http://ovfllimsi.bkt.clouddn.com/breat%20@2x.gif) 0% 0% / 100% 100%;
    margin:.1rem 0 0 0rem;
}
</style>


