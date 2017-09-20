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
                        src: '10-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '平底鞋',
                        src: '10-2.png',
                        choiced: false
                    },
                   
                ],
                page: 1,
                imgPackage: 'characts',
                pageName:'clock',
                nextPage:'./silkStockings'
            }

        }
    },
  
}
</script>


