<template>
    <div class="fingerTips">
        <div class="progress">
            <div class="bar">
                <div class="complete" style="width:10%"></div>
            </div>
            <span class="vl">5/24</span>
        </div>
        <p class="tit">请伸出你的一只手，看下指甲有多长</p>
        
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
            this.goNext();
    },
    methods: {
        goNext() {
            setTimeout(()=> {
                this.$router.push({ path: '/finger/'+this.$route.params.userid  });
            }, 3000)
        }
    }
}
</script>

<style>
.fingerTips .bottom {
    position: fixed;
    bottom: .08rem;
    width: 100%;
}

.fingerTips .progress {
    margin: .26rem .2rem 0 .2rem;
    overflow: hidden;
    text-align: right;
}

.fingerTips .tit {
    font-size: .17rem;
    margin: .15rem 0 .2rem .2rem;
    padding: 0;
    color: #222;
    text-align: left;
}

.fingerTips .progress .bar {
    float: left;
    margin-right: .55rem;
    display: inline-block;
    height: .02rem;
    width: 85%;
    background: #eeeeee;
    border-radius: .04rem;
    margin-top: .04rem;
}

.fingerTips .progress .bar .complete {
    height: .02rem;
    background: #43bb57;
    border-radius: .04rem;
}

.fingerTips .progress .vl {
    float: right;
    color: #999;
    font-size: .12rem;
    margin-top: -.08rem;
}

.fingerTips .bottom .cont {
    background: #43bb57;
    margin: 0 .2rem .15rem .2rem;
    color: #fff;
    font-size: .17rem;
    border-radius: .04rem;
    line-height: .44rem;
    height: .44rem;
}
</style>



