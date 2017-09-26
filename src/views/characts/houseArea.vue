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
                tit: '您的户型是',
                dataList: [
                    {
                        key: 0,
                        name: '中户型（小于150平方）',
                        src: 'huxing-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '大户型（150-400平方）',
                        src: 'huxing-2.png',
                        choiced: false
                    },
                     {
                        key: 1,
                        name: '超大户型（大于400平方）',
                        src: 'huxing-3.png',
                        choiced: false
                    },
                   
                ],
                page: 1,
                imgPackage: 'characts',
                pageName:'houseArea',
                nextPage:'/sex'
            }

        }
    },
  
}
</script>


