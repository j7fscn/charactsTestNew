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
                tit: '你比较喜欢哪个颜色',
                dataList: [
                    {
                        key: 0,
                        name: '',
                        src: '18-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '',
                        src: '18-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '',
                        src: '18-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '',
                        src: '18-4.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 4,
                        name: '',
                        src: '18-5.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 5,
                        name: '',
                        src: '18-6.png',
                        choiced: false,
                        score:5
                    }
                ],
                page: 21,
                pageProgress:18,
                imgPackage: 'characts',
                pageName:'choiceColor',
                nextPage:'/choiceDraw',
            }

        }
    },
  
}
</script>


