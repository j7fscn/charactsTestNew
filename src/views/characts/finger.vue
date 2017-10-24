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
                tit: '你看到另一只手的姿势是怎样呢',
                dataList: [
                    {
                        key: 0,
                        name: '弯曲',
                        src: '2-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '伸直',
                        src: '2-2.png',
                        choiced: false
                    },
                   
                ],
                page: 5,
                pageProgress:2,
                imgPackage: 'characts',
                pageName:'finger',
                nextPage:'/clock'
            }

        }
    },
  
}
</script>


