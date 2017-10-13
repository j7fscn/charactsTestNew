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
    methods: {
        nextPage(){
              this.$router.push({ path: this.mes.nextPage+'/'+this.$route.params.userid});
        }
    }
}
</script>
<style scoped>
.bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background: url('http://owxa0vmjl.bkt.clouddn.com/npc_bg@3x.png');
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
    color: #fff;
}

.tit {
    position: absolute;
    top:0; bottom: 0;
    left:0; right:0;
    margin: 0;
    padding-top: .4rem;
    padding-left: .2rem;
    padding-right: .2rem;
    padding-bottom: 0;
    font-size: .16rem;
    height: 1.6rem;
    line-height: 1.6em;
}

.btn {
    position: relative;
    top:1.8rem;
    display: inline-block;
    width: .4rem;
    height: .4rem;
}
.circle {
    width:.2rem;
    height: .2rem;
    display: inline-block;
  background: url(http://ovfllimsi.bkt.clouddn.com/circle@3x.png);
  background-size:100% 100%;
  margin:.1rem;

}
</style>


