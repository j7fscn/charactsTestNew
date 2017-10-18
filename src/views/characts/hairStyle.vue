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
                tit: '你喜欢的发型是',
                dataList: [
                    {
                        key: 0,
                        name: '清爽干练',
                        src: '10-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '花样帅气',
                        src: '10-2-1.png',
                        choiced: false
                    },
                   
                ],
                page: 13,
                pageProgress:10,
                imgPackage: 'characts',
                pageName:'hairStyle',
                nextPage:'/sleep'
            }

        }
    },
  
}
</script>


