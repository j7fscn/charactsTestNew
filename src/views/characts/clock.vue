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
                tit: '你的手机闹钟是哪种形式',
                dataList: [
                   
                    {
                        key: 0,
                        name: '连续多个闹钟',
                        src: '3-1new1.png',
                        choiced: false
                    },
                     {
                        key: 1,
                        name: '一个闹钟',
                        src: '3-2new1.png',
                        choiced: false
                    },
                   
                ],
                page: 6,
                pageProgress:3,
                imgPackage: 'characts',
                pageName:'clock',
                // nextPage:'/choiceColor' //临时测试

               nextPage:'/toothpaste'
            }

        }
    },
  
}
</script>


