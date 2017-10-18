<template>
    <div>
        <singleOneLine :mes="message"></singleOneLine>
    </div>
</template>
<script>
import singleOneLine from '../../components/singleOneLine'
export default {
    components: { singleOneLine },
    data() {
        return {
            sex: '',
            message: {
                tit: '',
                dataList: [
                    {
                        key: 0,
                        name: '',
                        src: '8-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '',
                        src: '8-2-1.png',
                        choiced: false
                    },

                ],
                page: 11,
                pageProgress:8,
                imgPackage: 'characts',
                pageName: 'faceScore',
                nextPage: ''
            }

        }
    },
    mounted() {
        this.getUserData();
    },

    methods: {
        getUserData() {
            var _self = this;

            var urlG = 'http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid;
            this.$jsonp(urlG).then(function(json) {
                _self.sex = _self.parseQueryString(json.data.result).sex;
                _self.setData();
            }).catch(function(error) {

            });
        },
        parseQueryString(url) {
            var obj = {};
            var keyvalue = [];
            var key = "", value = "";
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
            for (var i in paraString) {
                keyvalue = paraString[i].split("=");
                key = keyvalue[0];
                value = keyvalue[1];
                obj[key] = value;
            }
            return obj;
        },
        setData() {
            if (this.sex == 0) {
                this.message.tit = '二者只能选一你更希望拥有的是';
                this.message.dataList[0].name = '高晓松的才华';
                this.message.dataList[1].name = '吴彦祖的颜值';
                this.message.nextPage = '/watch';
                return

            }
            this.message.tit = '二者只能选一你更希望嫁给';
            this.message.dataList[0].name = '有才华的高晓松';
            this.message.dataList[1].name = '有颜值吴彦祖';
            this.message.nextPage = '/shoes'

        }
    }

}
</script>


