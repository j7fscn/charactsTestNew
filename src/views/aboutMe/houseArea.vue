<template>
    <div>
        <specialSingle :mes="message"></specialSingle>
    </div>
</template>
<script>
import specialSingle from '../../components/specialSingle'
export default {
    components: { specialSingle },
    data() {
        return {
            message: {
                tit: '您的户型是',
                dataList: [
                    {
                        key:'中户型',
                        name: '中户型（小于150平方）',
                        src: 'huxing-1.png',
                        choiced: false
                    },
                    {
                        key: '大户型',
                        name: '大户型（150-400平方）',
                        src: 'huxing-2.png',
                        choiced: false
                    },
                     {
                        key: 1,
                        name: '超大户型（大于400平方）',
                        src: 'huxing-3.png',
                        choiced: false
                    },
                   
                ],
                page: 3,
                pageProgress:2,
                imgPackage: 'characts',
                pageName:'houseArea',
                nextPage:'/readyGo'
            }

        }
    },
  
}
</script>


