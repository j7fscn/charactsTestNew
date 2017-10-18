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
                tit: '你挤牙膏的方式是',
                dataList: [
                    {
                        key: 0,
                        name: '从管尾开始挤',
                        src: '4-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '没有规律',
                        src: '4-2.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        name: '从管口开始挤',
                        src: '4-3.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        name: '从中间挤',
                        src: '4-4.png',
                        choiced: false
                    }
                   
                ],
                page: 7,
                pageProgress:4,
                imgPackage: 'characts',
                pageName:'tooThpaste',
                nextPage:'/orderFood'
            }

        }
    },
  
}
</script>


