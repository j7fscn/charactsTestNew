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
                tit: '你的性别是',
                dataList: [
                    {
                        key: 0,
                        name: '男',
                        src: '1-1new1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '女',
                        src: '1-2new1.png',
                        choiced: false
                    },
                   
                ],
                page: 4,
                pageProgress:1,
                imgPackage: 'characts',
                pageName:'sex',
                nextPage:'/fingerTips'
            }

        }
    },
  
}
</script>


