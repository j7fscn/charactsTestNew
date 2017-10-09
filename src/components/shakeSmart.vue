<template>
    <div class="double sing">
        <div class="progress">
            <div class="bar">
                <div class="complete" :style="'width:'+mes.page/24*100+'%'"></div>
            </div>
            <span class="vl">{{mes.page}}/24</span>

        </div>
        <p class="tit">{{mes.tit}}</p>
        <ul>
            <li v-for="(item,index) in mes.dataList"> 
                 <!-- @click="choice($event,index)" -->
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="item.src">
                      
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
            dataJson: '',
            currentKey: '',
            user_id:'',
            nextKey:'nextKey',
            doShakeSmart:0
        }
      
    },
    created(){
        this.getUserData();
    },
    mounted(){
       this.currentKey = this.mes.pageName; 
    },
    methods: {
      nextPage() {
            this.setUserData();
        },
        getUserData() {
            let urlG = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id='+this.$route.params.userid);
            this.$jsonp(urlG).then(json => {
                this.dataJson=json.data.result;
            }).catch(err => {
                console.log(err);
            })
        },
        setUserData() {
            var _self =this
            var data =''
            data= this.dataJson + '&' + this.currentKey + '=' + this.doShakeSmart + '&' + this.nextKey + '=' + this.mes.nextPage  ;
            var strToJson = this.parseQueryString(data);
            if(strToJson.nextKey == '/shakeResult'){
                this.doShakeSmart = 1;
            }
            var str ='';
            for(let i in strToJson){
                if(i == this.currentKey){
                    strToJson[i] = this.doShakeSmart;
                }
                str += i + '=' +strToJson[i] + '&';
            }
            str = str.substring(0, str.length - 1);
            var url = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult?'+ str;
            this.$jsonp(url).then(json => {
                _self.$router.push({ path: _self.mes.nextPage+'/'+_self.$route.params.userid});
            }).catch(err => {
                console.log(err);
            })
        },
        parseQueryString(url) {
            var obj={};
            var keyvalue=[];
            var key="",value=""; 
            var paraString=url.substring(url.indexOf("?")+1,url.length).split("&");
            for(var i in paraString)
            {
                keyvalue=paraString[i].split("=");
                key=keyvalue[0];
                value=keyvalue[1];
                obj[key]=value; 
            } 
            return obj;
        },
    }

}
</script>


