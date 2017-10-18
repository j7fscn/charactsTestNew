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
                        src: '20-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '',
                        src: '20-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '',
                        src: '20-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '',
                        src: '20-4.png',
                        choiced: false,
                        score:4
                    }
                ],
                page: 23,
                pageProgress:20,
                imgPackage: 'characts',
                pageName:'choicePic',
                nextPage:'/charactsResult',
            }

        }
    },
  
}
</script>


