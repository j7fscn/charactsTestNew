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
                tit: '哪些是你无法忍受的（多选）',
                dataList: [
                    {
                        key: 0,
                        score:1,
                        name: '',
                        src: '12-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        score:2,
                        name: '',
                        src: '12-2.png',
                        choiced: false
                    },
                    {
                        key: 2,
                        score:3,
                        name: '',
                        src: '12-3.png',
                        choiced: false
                    },
                    {
                        key: 3,
                        score:3,
                        name: '',
                        src: '12-4.png',
                        choiced: false
                    },
                    {
                        key: 4,
                        score:3,
                        name: '',
                        src: '12-5.png',
                        choiced: false
                    },
                    {
                        key: 5,
                        score:5,
                        name: '',
                        src: '12-6.png',
                        choiced: false
                    },
                   
                ],
                page: 15,
                pageProgress:12,
                imgPackage: 'characts',
                pageName:'unbear',
                nextPage:'/knowMan'
            }

        }
    },
  
}
</script>


