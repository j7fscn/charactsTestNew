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
                        name: '口红',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-1.png',
                        choiced: false
                    },
                    {
                        name: '柠檬',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-2.png',
                        choiced: false
                    },
                     {
                        name: '树叶',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-3.png',
                     },
                      {
                        name: '牛奶',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-4.png',
                     },
                      {
                        name: '蜂窝煤',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-5.png',
                     },
                     
                      {
                        name: '大海',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-6.png',
                     },
                      {
                        name: '薰衣草',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-7.png',
                     },
                      {
                        name: '领带',
                        src: 'http://owxa0vmjl.bkt.clouddn.com/sm2-8.png',
                     }

                   
                ],
                page: 1,
                pageProgress:2,
                pageName:'shakeSmart',
                nextPage:'/shakeThird'
            }

        }
    },
  
}
</script>


