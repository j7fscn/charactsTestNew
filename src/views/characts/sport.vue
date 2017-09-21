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
                        name: '瑜伽',
                        src: '17-1-2.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        score:2,
                        name: '芭蕾',
                        src: '17-2-2.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        score:3,
                        name: '跑步',
                        src: '17-3-2.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        score:4,
                        name: '排球',
                        src: '17-4-2.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        score:5,
                        name: '篮球',
                        src: '17-5-2.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        score:0,
                        name: '羽毛球',
                        src: '17-6-2.png',
                        choiced: false
                    },
                   
                ],
                page: 10,
                imgPackage: 'characts',
                pageName:'sport',
                nextPage:'./choiceColor'
            }

        }
    }
  
}
</script>


