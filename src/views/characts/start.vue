<template>
    <div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed: {},
    beforeCreate() { },
    created() {
        this.linkToPage();
    
    },
    methods: {
        linkToPage() {
            var _self = this;
            if(!this.$route.params.userid||this.$route.params.userid=="undefined"){
                  _self.$router.push({ path:  '/start/' + this.getRadomId() });//没有ID生成随机ID
            }
            var url = ('http://120.27.215.62:8999/personalityTest/getPersonalityTestResult?user_id=' + this.$route.params.userid);
            this.$jsonp(url).then(function(json) {
                // 插入新用户
                if (json.data.result == '数据库没有该userId的记录') {
                    _self.insertUserid();
                    return
                }
                var json = _self.parseQueryString(json.data.result);
                if (json.shakeSmart == '0') {
                    _self.$router.push({ path: '/shakeFirst/' + _self.$route.params.userid })
                    return
                }
                _self.$router.push({ path: json.nextKey + '/' + _self.$route.params.userid })

            }).catch(err => {

            })
        },
        insertUserid() {
              var _self = this;
            var urlNew = 'http://120.27.215.62:8999/personalityTest/insertPersonalityTestResult?user_id=' + this.$route.params.userid + '&shakeSmart=0&result=0';
            this.$jsonp(urlNew).then(function(json) {

                _self.$router.push({ path: '/shakeFirst/' + _self.$route.params.userid })
                return
            }).catch(err => {
             
                console.log('err')
            })
        },
        parseQueryString(url) {
            var obj = {}
            var keyvalue = []
            var key = "", value = "";
            var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&")
            for (var i in paraString) {
                keyvalue = paraString[i].split("=")
                key = keyvalue[0]
                value = keyvalue[1]
                obj[key] = value
            }
            return obj
        },
        getRadomId() {
            let idStr = Date.now().toString(36)
            idStr += Math.random().toString(36).substr(3)
            return idStr
        }
    }

}
</script>
