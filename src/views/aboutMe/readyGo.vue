<template>
  <div class="readyGo" id="readyGo">
      <div class="boxMid">
          <div class="textCent">
              <p>hello world</p>
              <p>hh</p>
              <p>我也不知道怎么写了</p>
          </div>
          <div class="btn"></div>
      </div>
  </div>
</template>

<script>
export default {
    // name:'readyGo',
    data(){
      return{
          
      }
    },
    mounted:function(){
        var height =  window.screen.height
        document.getElementById('readyGo').style.height = height + 'px'
    },
    created(){

    },
    computed:{
    }
}
</script>
<style scoped>
    .readyGo {
        position: relative;
        background-image: url(',./../static/images/characts/8-1-1.png');
        background-size:100% 100%;
    }
    .boxMid{
        position: absolute;
        margin:0 auto;
        left: 0;  right: 0;
        /* top: 0; bottom: 0;  */
        bottom: 20px;
        width:90%;
        height: 200px;
        background: rgba(55,66,66, .6);
    }
    .btn{
        position: relative;
        margin: 0 auto;
        top:150px;
        /* left: 0;  right: 0; */
        buttom:10px;
        width:40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
    }
    p{
        line-height: 18px;
        font-size: 18px;
    }
    .textCent{
        position: absolute;
        margin:0 auto;
        left: 0;  right: 0;
        top: 0; bottom: 0; 
        height: 140px;
        text-align: center;
        color: #fff;
    }
</style>


