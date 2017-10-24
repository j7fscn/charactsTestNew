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
                tit: '选择记住与上⼀个选择有关联的',
                dataList: [
                    {
                        name: '窗帘',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-1.png',
                        choiced: false
                    },
                    {
                        name: '餐桌',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-2.png',
                        choiced: false
                    },
                     {
                        name: '柜子',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-3.png',
                     },
                      {
                        name: '沙发',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-4.png',
                     },
                      {
                        name: '浴缸',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-5.png',
                     },
                     
                      {
                        name: '茶几',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-6.png',
                     },
                      {
                        name: '床',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-7.png',
                     },
                      {
                        name: '椅子',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm3-8.png',
                     }

                   
                ],
                page: 1,
                pageProgress:3,
                pageName:'shakeSmart',
                nextPage:'/shakeResult'
            }

        }
    },
  
}
</script>


