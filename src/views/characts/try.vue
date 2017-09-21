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
                tit: '你想尝试什么（多选）',
                dataList: [
                    {
                        key: 0,
                        name: '滑翔伞',
                        src: '15-1.png',
                        choiced: false,
                        score:5,
                    },
                    {
                        key: 1,
                        name: '攀岩',
                        src: '15-2.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 2,
                        name: '蹦极',
                        src: '15-3.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 3,
                        name: '走沙漠',
                        src: '15-4.png',
                        choiced: false,
                        score:4
                    },
                    {
                        key: 4,
                        name: '冲浪',
                        src: '15-5.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 5,
                        name: '都不想',
                        src: '15-6.png',
                        choiced: false,
                        score:0
                    }
                ],
                page: 5,
                imgPackage: 'characts',
                pageName:'try',
                nextPage:'./doSome',
            }

        }
    },
  
}
</script>


