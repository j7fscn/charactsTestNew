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
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-1.png',
                        choiced: false
                    },
                    {
                        name: '眉笔',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-2.png',
                        choiced: false
                    },
                     {
                        name: '指甲油',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-3.png',
                     },
                      {
                        name: '假睫毛',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-4.png',
                     },
                      {
                        name: '粉底',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-5.png',
                     },
                     
                      {
                        name: '领带夹',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-6.png',
                     },
                      {
                        name: '领结',
                        src: 'http://ovfllimsi.bkt.clouddn.com/1-7new.png',
                     },
                      {
                        name: '衬衫',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm1-8.png',
                     }

                   
                ],
                page: 1,
                pageProgress:1,
                pageName:'shakeSmart',
                nextPage:'/shakeSecond'
            }

        }
    },
  
}
</script>


