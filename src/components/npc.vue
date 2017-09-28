<template>
    <div class="bg">
        <div class="cont">
            <div class="shadow">
                <p class="tit" v-html="mes.title"></p>
                <span class="btn" @click="nextPage"></span>
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
    margin: .1rem;
}

.shadow {
    width: 100%;
    height: 1.6rem;
    background: url('http://owxa0vmjl.bkt.clouddn.com/background_under@3x.png');
    background-size: 100% 100%;
    color: #fff;
}

.tit {
    padding-top: .4rem;
    padding-left: .2rem;
    padding-right: .2rem;
    margin: 0;
    padding-bottom: 0;
    line-height: 1.5em;
}

.btn {
    display: inline-block;
    width: .3rem;
    height: .3rem;
    ;
    background: #fff;
    border-radius: 50%;
    margin: .2rem auto 0 auto;
}
</style>


