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
                tit: '你的睡觉姿势是',

                dataList: [
                    {
                        key: 0,
                        name: '侧着睡',
                        src: '11-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '蜷缩着睡',
                        src: '11-2.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        name: '趴着睡',
                        src: '11-3.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        name: '仰着睡',
                        src: '11-4.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        name: '端正仰着睡',
                        src: '11-5.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        name: '侧趴着睡',
                        src: '11-6.png',
                        choiced: false
                    }
                ],
                page: 14,
                pageProgress:11,
                imgPackage: 'characts',
                pageName:'sleep',
                nextPage:'/unbear'
            }

        }
    },
  
}
</script>


