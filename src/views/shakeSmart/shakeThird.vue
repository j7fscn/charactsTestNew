<template>
    <div>
        <shake-smart :mes="message"></shake-smart>
    </div>
</template>
<script>
import shakeSmart from '../../components/shakeSmart'
export default {
    components: { shakeSmart },
    data() {
        return {
            message: {
                tit: '选择一个并记在心中',
                dataList: [
                    {
                        name: '窗帘',
                        src: '3-1.png',
                        choiced: false
                    },
                    {
                        name: '餐桌',
                        src: '3-2.png',
                        choiced: false
                    },
                     {
                        name: '柜子',
                        src: '3-3.png',
                     },
                      {
                        name: '沙发',
                        src: '3-4.png',
                     },
                      {
                        name: '浴缸',
                        src: '3-5.png',
                     },
                     
                      {
                        name: '茶几',
                        src: '3-6.png',
                     },
                      {
                        name: '床',
                        src: '3-7.png',
                     },
                      {
                        name: '椅子',
                        src: '3-8.png',
                     }

                   
                ],
                page: 2,
                imgPackage: 'shakeSmart',
                pageName:'shakeThird',
                nextPage:'./sex'
            }

        }
    },
  
}
</script>


