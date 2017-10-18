<template>
    <div>
        <mult-select :mes="message"></mult-select>
    </div>
</template>
<script>
import multSelect from '../../components/multSelect'
export default {
    components: { multSelect },
    data() {
        return {
            sex:'',
            message: {
                tit: '你做过哪些（多选）',
                sex:'',
                dataList: [
                    {
                        key: 0,
                        name: '手机相册很多自拍',
                        src: '16-1.png',
                        choiced: false,
                        score: 4,
                    },
                    {
                        key: 1,
                        name: '用自己头像做表情包',
                        src: '16-2.png',
                        choiced: false,
                        score: 5
                    },
                    {
                        key: 2,
                        name: '自己发的朋友圈点赞',
                        src: '16-3.png',
                        choiced: false,
                        score: 3
                    },
                    {
                        key: 3,
                        name: '起床马上照镜子',
                        src: '16-4.png',
                        choiced: false,
                        score: 5
                    },
                    {
                        key: 4,
                        name: '拿自己的照片做屏保',
                        src: '16-5.png',
                        choiced: false,
                        score: 4
                    },
                    {
                        key: 5,
                        name: '觉得自己很帅很美',
                        src: '16-6.png',
                        choiced: false,
                        score: 5
                    }
                ],
                page: 19,
                pageProgress:16,
                imgPackage: 'characts',
                pageName: 'dosome',
                nextPage: '',
            }

        }
    },
    created() {
        this.getUserData();
           
      
    },
    methods: {
        getUserData() {
            var _self = this;
            var urlG = 'http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid;
            _self.$jsonp(urlG).then(function(json) {
            _self.sex = _self.parseQueryString(json.data.result).sex;
            _self.setData();
            }).catch(err => {

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
        setData() {
            if (this.sex == 0) {
                this.message.nextPage = '/sport';
                return
            
            }
            this.message.nextPage = '/sportW'
        }
    }

}
</script>


