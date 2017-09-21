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
                tit: '选一副你喜欢的图',
                dataList: [
                    {
                        key: 0,
                        name: '',
                        src: '13-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '',
                        src: '13-1.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '',
                        src: '13-1.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '',
                        src: '13-1.png',
                        choiced: false,
                        score:4
                    }
                ],
                page: 11,
                imgPackage: 'characts',
                pageName:'choicePic',
                nextPage:'./result',
            }

        }
    },
  
}
</script>


