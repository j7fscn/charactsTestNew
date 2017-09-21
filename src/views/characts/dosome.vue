<template>
    <div>
        <mult-select :mes="message"></mult-select>
    </div>
</template>
<script>
import multSelect from '../../components/multSelect'
export default {
    components: { multSelect },
    data() {
        return {
            message: {
                tit: '你做过哪些（多选）',
                dataList: [
                    {
                        key: 0,
                        name: '手机相册很多自拍',
                        src: '16-1.png',
                        choiced: false,
                        score:4,
                    },
                    {
                        key: 1,
                        name: '用自己的头像做表情包',
                        src: '16-2.png',
                        choiced: false,
                        score:5
                    },
                    {
                        key: 2,
                        name: '给自己发的朋友圈点赞',
                        src: '16-3.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 3,
                        name: '起床马上照镜子',
                        src: '16-4.png',
                        choiced: false,
                        score:5
                    },
                    {
                        key: 4,
                        name: '拿自己的照片做屏保',
                        src: '16-5.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 5,
                        name: '觉得自己很帅很美',
                        src: '16-6.png',
                        choiced: false,
                        score:5
                    }
                ],
                page: 5,
                imgPackage: 'characts',
                pageName:'dosome',
                nextPage:'./choiceColor',
            }

        }
    },
  
}
</script>


