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
                tit: '这些动漫角色你认出哪些（多选）',
                dataList: [
                    {
                        key: 0,
                        score:4,
                        name: '',
                        src: '13-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        score:2,
                        name: '',
                        src: '13-2.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        score:3,
                        name: '',
                        src: '13-3.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        score:4,
                        name: '',
                        src: '13-4.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        score:5,
                        name: '',
                        src: '13-5.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        score:0,
                        name: '',
                        src: '13-6.png',
                        choiced: false
                    },
                   
                ],
                page: 10,
                imgPackage: 'characts',
                pageName:'knowMan',
                nextPage:'./mustHave'
            }

        }
    },
  
}
</script>


