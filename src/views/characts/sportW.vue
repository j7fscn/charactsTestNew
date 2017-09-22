<template>
    <div>
        <mulSelect :mes="message"></mulSelect>
    </div>
</template>
<script>
import mulSelect from '../../components/multSelect'
export default {
    components: { mulSelect },
    data() {
        return {
            message: {
                tit: '你比较喜欢哪些运动（多选）',
                dataList: [
                    {
                        key: 0,
                        score:4,
                        name: '拳击',
                        src: '17-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        score:2,
                        name: '羽毛球',
                        src: '17-2-1.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        score:3,
                        name: '篮球',
                        src: '17-3-1.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        score:4,
                        name: '跑步',
                        src: '17-4-1.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        score:5,
                        name: '足球',
                        src: '17-5-1.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        score:0,
                        name: '健身',
                        src: '17-6-1.png',
                        choiced: false
                    },
                   
                ],
                page: 18,
                imgPackage: 'characts',
                pageName:'sport',
                nextPage:'./choiceColor'
            }

        }
    }
  
}
</script>


