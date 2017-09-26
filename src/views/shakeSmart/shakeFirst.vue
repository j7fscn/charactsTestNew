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
                        name: '眼影',
                        src: '1-1.png',
                        choiced: false
                    },
                    {
                        name: '眉笔',
                        src: '1-2.png',
                        choiced: false
                    },
                     {
                        name: '指甲油',
                        src: '1-3.png',
                     },
                      {
                        name: '假睫毛',
                        src: '1-4.png',
                     },
                      {
                        name: '粉底',
                        src: '1-5.png',
                     },
                     
                      {
                        name: '领带夹',
                        src: '1-6.png',
                     },
                      {
                        name: '领结',
                        src: '1-7.png',
                     },
                      {
                        name: '衬衫',
                        src: '1-8.png',
                     }

                   
                ],
                page: 2,
                imgPackage: 'shakeSmart',
                pageName:'shakeSmart',
                nextPage:'/shakeSecond'
            }

        }
    },
  
}
</script>


