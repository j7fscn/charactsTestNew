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
                tit: '你喜欢哪些袜子（多选）',
                dataList: [
                    {
                        key: 0,
                        name: '肤色丝袜',
                        src: '11_1.png',
                        choiced: false,
                        score:1,
                    },
                    {
                        key: 1,
                        name: '黑色过膝袜',
                        src: '11_1.png',
                        choiced: false,
                        score:2
                    },
                    {
                        key: 2,
                        name: '白色波点袜',
                        src: '11_3.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 3,
                        name: '黑色蕾丝袜',
                        src: '11_4.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 5,
                        name: '红色蕾丝袜',
                        src: '11_5.png',
                        choiced: false,
                        score:3
                    },
                    {
                        key: 5,
                        name: '黑色渔网袜',
                        src: '11_6.png',
                        choiced: false,
                        score:4
                    }
                ],
                page: 5,
                imgPackage: 'characts',
                pageName:'skillStockings',
                nextPage:'./sleep',
            }

        }
    },
  
}
</script>


