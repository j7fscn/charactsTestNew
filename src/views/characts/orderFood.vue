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
                tit: '你去餐厅吃饭一般怎么点餐',
                dataList: [
                    {
                        key: 0,
                        name: '看点评或者朋友推荐',
                        src: '5-1new1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '看菜单自主点餐',
                        src: '5-2.png',
                        choiced: false
                    },
                   
                ],
                page: 8,
                pageProgress:5,
                imgPackage: 'characts',
                pageName:'orderFood',
                nextPage:'/camera'
            }

        }
    },
  
}
</script>


