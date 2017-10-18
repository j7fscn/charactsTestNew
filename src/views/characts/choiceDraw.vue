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
                tit: '你比较喜欢哪副画',
                dataList: [
                    {
                        key: 0,
                        name: '',
                        src: '19-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '',
                        src: '19-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '',
                        src: '19-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '',
                        src: '19-4.png',
                        choiced: false,
                        score:4
                    }
                ],
                page: 22,
                pageProgress:19,
                imgPackage: 'characts',
                pageName:'choiceDraw',
                nextPage:'/choicePic',
            }

        }
    },
  
}
</script>


