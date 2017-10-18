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
                tit: '旅游拍照你喜欢带',
                dataList: [
                    {
                        key: 0,
                        name: '专业相机',
                        src: '6-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '手机拍拍就足够',
                        src: '6-2.png',
                        choiced: false
                    },
                   
                ],
                page: 9,
                pageProgress:6,
                imgPackage: 'characts',
                pageName:'camera',
                nextPage:'/travel'
            }

        }
    },
  
}
</script>


