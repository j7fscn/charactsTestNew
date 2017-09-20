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
                tit: '您的睡觉姿势是',

                dataList: [
                    {
                        key: 0,
                        name: '侧睡',
                        src: '11_1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '蜷缩',
                        src: '11_1.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        name: '趴着',
                        src: '11_3.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        name: '侧睡',
                        src: '11_4.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        name: '侧睡',
                        src: '11_5.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        name: '侧睡',
                        src: '11_6.png',
                        choiced: false
                    }
                ],
                page: 5,
                imgPackage: 'characts',
                pageName:'sleep',
                nextPage:'#'
            }

        }
    },
  
}
</script>


