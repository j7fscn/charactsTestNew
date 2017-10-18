<template>
    <div>
        <mult-select :mes="message"></mult-select>
    </div>
</template>
<script>
import multSelect from '../../components/multSelect'
export default {
    components: { multSelect },
    data() {
        return {
            message: {
                tit: '你认为哪些是必须要有的（多选）',
                dataList: [
                    {
                        key: 0,
                        name: '每个节日都要过',
                        src: '14-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '每年都要有旅行',
                        src: '14-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '每周都要和伴侣约会',
                        src: '14-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '每天写日记',
                        src: '14-4.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 4,
                        name: '吃水果切块或者榨汁',
                        src: '14-5.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 5,
                        name: '定期洗照片整理相册',
                        src: '14-6.png',
                        choiced: false,
                        score:5
                    }
                ],
                page: 17,
                pageProgress:14,
                imgPackage: 'characts',
                pageName:'mustHave',
                nextPage:'/try',
            }

        }
    },
  
}
</script>


