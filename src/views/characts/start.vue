<template>
  <div></div>
</template>
<script>
export default {
    created() {
        this.linkToPage();

    },
    methods:{
        linkToPage(){
            this.$jsonp('http://192.168.2.240:8999/personalityTest/getPersonalityTestResult?user_id=122').then(json => {
                var json = this.parseQueryString(json.data.result)
                for(let i in json){

                }
                
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
