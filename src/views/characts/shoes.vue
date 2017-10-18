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
                tit: '约会一般你会穿什么样的鞋',
                dataList: [
                    {
                        key: 0,
                        name: '高跟鞋',
                        src: '9-1-2.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '平底鞋',
                        src: '9-2-2.png',
                        choiced: false
                    },
                   
                ],
                page: 12,
                pageProgress:9,
                imgPackage: 'characts',
                pageName:'shoes',
                nextPage:'/skillStockings'
            }

        }
    },
  
}
</script>


