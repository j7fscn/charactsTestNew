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
<script>

export default {
    props: ['mes'],
    data() {
        return {
            dataJson: {},
            currentKey: '',
            checkedValue: -1,
        }
    },
    created() {
        this.getUserData();
        this.setUserData();
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
            this.getUserData();
            this.$router.push({ path: this.mes.nextPage });
        },
        getUserData() {

            this.$jsonp('http://192.168.2.240:8999/personalityTest/getPersonalityTestResult?user_id=122').then(json => {
                this.dataJson=json;
           }).catch(err => {
            })
        },
        setUserData() {
            var url = 'http://192.168.2.240:8999/personalityTest/insertPersonalityTestResult' + this.setJsonToString();
            this.$jsonp(url).then(json => {

            }).catch(err => {
                console.log(err)
            })
        },
        setJsonToString() {
            var json = this.dataJson;
            var str = '?';
            for (var o in json) {
                str += o + '=' + json[o] + '&'
            }
            str = str.substring(0, str.length - 1) + this.currentKey + '=' + this.checkedValue;
            return str;
        }
    }

}
</script>


