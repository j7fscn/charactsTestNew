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
                tit: '您左手呈现什么样的姿势呢',
                dataList: [
                    {
                        key: 0,
                        name: '弯曲',
                        src: '2-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '伸开',
                        src: '2-2.png',
                        choiced: false
                    },
                   
                ],
                page: 3,
                imgPackage: 'characts',
                pageName:'finger',
                nextPage:'./clock'
            }

        }
    },
  
}
</script>


