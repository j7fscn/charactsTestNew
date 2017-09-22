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
                        src: '13-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '',
                        src: '13-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '',
                        src: '13-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '',
                        src: '13-4-1png',
                        choiced: false,
                        score:4
                    }
                ],
                page: 20,
                imgPackage: 'characts',
                pageName:'choiceDraw',
                nextPage:'./choicePic',
            }

        }
    },
  
}
</script>


