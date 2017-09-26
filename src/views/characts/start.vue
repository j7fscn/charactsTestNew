<template>
  <div>{{$route.params.userid}}</div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    computed:{},
    beforeCreate(){},
    created() {
        // this.$router.push({ path: '/shakeFirst/'+this.$route.params.userid})
        this.linkToPage()
    },
    methods:{
        linkToPage(){
            if(this.$route.params.userid == undefined || this.$route.params.userid == null ){        
                alert('请输入用户ID')
            }
            var url = ('http://192.168.2.240:8999/personalityTest/getPersonalityTestResult?user_id='+this.$route.params.userid)
            this.$jsonp(url).then(json => {
                // 插入新用户
                if(json.data.result == null){
                    this.insertUserid()
                    return
                }
                var json = this.parseQueryString(json.data.result)
                if(json.user_id || json.nextKey == './shakeFirst' || json.nextKey == './shakeSecond' || json.nextKey == './shakeThird' ){
                    this.$router.push({ path: '/shakeFirst/'+this.$route.params.userid})
                    return
                }
                this.$router.push({ path: json.nextKey+'/'+this.$route.params.userid})
                
            }).catch(err => {
                console.log(err)
            })
        },
        insertUserid(){
            let _self = this
            var urlNew = 'http://192.168.2.240:8999/personalityTest/insertPersonalityTestResult?user_id='+this.$route.params.userid
                this.$jsonp(urlNew).then(json1 => {
<<<<<<< HEAD
                    console.log(json1)
                
=======
                    _self.linkToPage()
>>>>>>> 9413abe0dd7ae5aa96e9c318506dee36ba6d33b3
                    
                }).catch(err => {
                    console.log('err')
                })
        },
        parseQueryString(url) {
            var obj={}
            var keyvalue=[]
            var key="",value="";
            var paraString=url.substring(url.indexOf("?")+1,url.length).split("&")
            for(var i in paraString)
            {
                keyvalue=paraString[i].split("=")
                key=keyvalue[0]
                value=keyvalue[1]
                obj[key]=value
            } 
            return obj
        },
    }
  
}
</script>
