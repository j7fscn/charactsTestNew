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
            message: {
                tit: '您的性别是',
                dataList: [
                    {
                        key: 0,
                        name: '男',
                        src: '1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '女',
                        src: '1-2.png',
                        choiced: false
                    },
                   
                ],
                page: 1,
                imgPackage: 'characts',
                pageName:'sex',
                nextPage:'/fingerTips'
            }

        }
    },
  
}
</script>


