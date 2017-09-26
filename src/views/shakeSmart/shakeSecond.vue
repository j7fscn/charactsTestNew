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
                        name: '口红',
                        src: '2-1.png',
                        choiced: false
                    },
                    {
                        name: '柠檬',
                        src: '2-2.png',
                        choiced: false
                    },
                     {
                        name: '树叶',
                        src: '2-3.png',
                     },
                      {
                        name: '牛奶',
                        src: '2-4.png',
                     },
                      {
                        name: '蜂窝煤',
                        src: '2-5.png',
                     },
                     
                      {
                        name: '大海',
                        src: '2-6.png',
                     },
                      {
                        name: '薰衣草',
                        src: '2-7.png',
                     },
                      {
                        name: '领带',
                        src: '2-8.png',
                     }

                   
                ],
                page: 2,
                imgPackage: 'shakeSmart',
                pageName:'shakeSmart',
                nextPage:'/shakeThird'
            }

        }
    },
  
}
</script>


