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
            <li v-for="(item,index) in mes.dataList"> 
                 <!-- @click="choice($event,index)" -->
                <div class="cont">
                    <div class="imgWrap">
                        <img v-lazy="'./static/images/'+mes.imgPackage+'/'+item.src">
                      
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
        if(this.mes.nextPage == '/sex' ){
                this.doShakeSmart = 1
        }
    },
    mounted(){
       this.currentKey = this.mes.pageName; 
    },
    methods: {
      nextPage() {
            this.setUserData();
            
            this.$router.push({ path: this.mes.nextPage+'/'+this.$route.params.userid});
        },
        getUserData() {
            let urlG = ('http://192.168.2.240:8999/personalityTest/getPersonalityTestResult?user_id='+this.$route.params.userid)
            this.$jsonp(urlG).then(json => {
                this.dataJson=json.data.result
            }).catch(err => {
                console.log(err)
            })
        },
        setUserData() {
            var data =''
            // if(this.dataJson == null || this.dataJson == undefined ){
            //     data= 'user_id=' + this.$route.params.userid + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.mes.nextPage   
            // }else{
                data= this.dataJson + '&' + this.currentKey + '=' + this.doShakeSmart + '&' + this.nextKey + '=' + this.mes.nextPage  
            // }
            var strToJson = this.parseQueryString(data)
            var str =''
            for(let i in strToJson){
                if(i == this.currentKey){
                    strToJson[i] = this.doShakeSmart
                }
                str += i + '=' +strToJson[i] + '&'
            }
            str = str.substring(0, str.length - 1)
            console.log(strToJson) 
            var url = 'http://192.168.2.240:8999/personalityTest/insertPersonalityTestResult?'+ str
            this.$jsonp(url).then(json => {
            }).catch(err => {
                console.log(err)
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


