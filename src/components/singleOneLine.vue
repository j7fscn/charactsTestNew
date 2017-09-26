<template>
    <div :class="mes.dataList.length>=4?'double sing':'one sing'">
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
                        <img v-lazy="'./static/images/'+mes.imgPackage+'/'+item.src">
                        <div class="mask" v-if="item.choiced">
                            <div class="shadow"></div>
                            <div class="checked">
                                <img src="static/images/checked.png">
                            </div>
                        </div>
                    </div>
                    <p class="memo">{{item.name}}</p>

                </div>
            </li>
        </ul>
        <div class="bottom">
            <div v-if="checkedValue==-1" class="cont">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>
            <div v-else class="cont checked" @click="setValue">确&nbsp;&nbsp;&nbsp;&nbsp;定</div>

        </div>
    </div>
</template>

<script>

export default {
    props: ['mes'],
    data() {
        return {
            dataJson: '',
            currentKey: '',
            user_id:'',
            nextKey:'nextKey',
            checkedValue: -1,
        }
    },
    created() {
        this.getUserData();

    },
    mounted() {

        this.currentKey = this.mes.pageName;

    },
    methods: {
        choice(e, index) {
            if (this.mes.dataList[index].choiced) {
                this.mes.dataList[index].choiced = false;
                this.checkedValue = -1;
                return

            }
            this.checkedValue = this.mes.dataList[index].key;
            this.mes.dataList[index].choiced = true;
            this.mes.dataList.forEach(function(k, i) {
                if (i != index) {
                    k.choiced = false;
                }
            })
        },
        setValue() {
            this.setUserData();
            this.$router.push({ path: this.mes.nextPage+'/'+this.$route.params.userid });
        },
        getUserData() {
            // ?user_id='+this.$route.params.userid
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
                // data= 'user_id=' + this.$route.params.userid + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.mes.nextPage   
            // }else{
                data= this.dataJson + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.mes.nextPage  
            // }
            var strToJson = this.parseQueryString(data)
            var str =''
            for(let i in strToJson){
                if(i == this.currentKey){
                    strToJson[i] = this.checkedValue
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
        // setJsonToString() {
        //     var json = this.dataJson;
        //     console.log(1)
        //     // console.log(this.dataJson)
        //     var str = '?';
        //     for (var o in json) {
        //         str += o + '=' + json[o] + '&'
        //     }
        //     str = str.substring(0, str.length - 1) + this.currentKey + '=' + this.checkedValue;
        //     return str;
        // }
    }

}
</script>


<style>
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
</style>


