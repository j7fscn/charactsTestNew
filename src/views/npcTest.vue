<template>
    <div class="bg">
        <div class="cont">
            <div class="shadow">
                <div class="contentPosition" 
                ref="content" 
                style="transition: -webkit-transform 5s ; transform: translate3d(0px, -110px, 0px);">
                    <p>很棒</p>
                    <p>你的眼光很独特</p>
                    <p>查看测试报告</p>
                </div>
                <span class="btn">   
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
    };
  },
    beforeCreate(){
    },
    mounted(){
    },
    methods: {
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
.contentPosition{
    position: absolute;
    top:1rem; bottom: 0;
    left:0; right:0;
    margin: 0;
    padding-top: .6rem;
    padding-left: .2rem;
    padding-right: .2rem;
    padding-bottom: 0;
    font-size: .16rem;
    height: 1rem;
    /* line-height: 1.6em; */
    overflow: hidden;
}
.contentPosition ul, .contentPosition li{
    margin:0;
    padding-bottom: .06rem;
    padding-left:0;
    list-style-type: none;
    text-align: center;;
}
.contentPosition p{
    position: relative;
    margin:0; padding:.08rem;
}

/* .tit {
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
} */

.btn {
    position: relative;
    top:1.6rem;;
    display: inline-block;
    width: .4rem;
    height: .4rem;
    background: #fff;
    border-radius: 50%;
    /* margin: .2rem auto 0 auto; */
}
</style>


