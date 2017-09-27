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
            checkedImgKey:''
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
             if(this.mes.nextPage == '/sex' ){
                this.doShakeSmart = 1;
            }
            
        },
        getUserData() {
            var _self = this
            let urlG = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id='+this.$route.params.userid);
            this.$jsonp(urlG).then(json => {
                this.dataJson=json.data.result;
            }).catch(err => {

            })
        },
        setUserData() {
            var data =''
            var _self =this
                data= this.dataJson + '&' + this.currentKey + '=' + this.checkedValue + '&' + this.nextKey + '=' + this.mes.nextPage  ;
            var strToJson = this.parseQueryString(data);
            
            var str =''
            for(let i in strToJson){
                 if(i == 'houseArea'){
                    strToJson[i] = this.swithHouseName(strToJson[i]);
                }

                if(i == this.currentKey){
                    strToJson[i] = this.checkedValue;
                }
                str += i + '=' +strToJson[i] + '&';
            }
            str = str.substring(0, str.length - 1);
            
            console.log(strToJson)
            var url = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult?'+ str;
            this.$jsonp(url).then(json => {
                _self.$router.push({ path: _self.mes.nextPage+'/'+_self.$route.params.userid });
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
         swithHouseName(n){
      
           switch(n)
            {
            case 0:
            return '小户型'
            break;
            case 1:
             return '大户型'
            break;
            default:
              return '超户型'
            }

        }

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


