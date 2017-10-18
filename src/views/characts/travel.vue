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
                tit: '你最想去哪里旅行',
                dataList: [
                    {
                        key: 0,
                        name: '自然风光旅行',
                        src: '7-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '城市旅行',
                        src: '7-2.png',
                        choiced: false
                    },
                   
                ],
                page: 10,
                pageProgress:7,
                imgPackage: 'characts',
                pageName:'travel',
                nextPage:'/faceScore'
            }

        }
    },
  
}
</script>


