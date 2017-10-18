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
                tit: '你喜欢的手表是',
                dataList: [
                    {
                        key: 0,
                        name: '智能手表',
                        src: '9-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '机械、石英表',
                        src: '9-2-1.png',
                        choiced: false
                    },
                   
                ],
                page: 12,
                pageProgress:9,
                imgPackage: 'characts',
                pageName:'watch',
                nextPage:'/hairstyle'
            }

        }
    },
  
}
</script>


