<template>
    <div>
        <singleOneLine :mes="message"></singleOneLine>
    </div>
</template>
<script>
import singleOneLine from '../../components/singleOneLine'
export default {
    components: { singleOneLine },
    data() {
        return {
            message: {
                tit: '',
                sex: localStorage.getItem('sex'),
                dataList: [
                    {
                        key: 0,
                        name: '',
                        src: '8-1-1.png',
                        choiced: false
                    },
                    {
                        key: 1,
                        name: '',
                        src: '8-2-1.png',
                        choiced: false
                    },

                ],
                page: 9,
                imgPackage: 'characts',
                pageName: 'faceScore',
                nextPage: ''
            }

        }
    },
    created() {
        this.setData();
    },
    methods: {
        setData() {
            var sex = localStorage.getItem('sex');
            if (sex == 0) {
                this.message.tit='二者只能选一你更希望拥有的是';
                this.message.dataList[0].name = '高晓松的才华';
                this.message.dataList[1].name = '吴彦祖的颜值';
                this.message.nextPage = '/watch'
                return
            }
             this.message.tit='二者只能选一你更希望嫁给';
            this.message.dataList[0].name = '有才华的高晓松';
            this.message.dataList[1].name = '有颜值吴彦祖';
            this.message.nextPage = '/shoes'
        }
    }

}
</script>


