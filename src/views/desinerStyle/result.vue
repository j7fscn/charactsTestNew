<template>
    <npc :mes="mes">
    </npc>
</template>
<script>
import npc from '../../components/npc'
export default {
    components: { npc },
    data() {
        return {
            mes: {
                title: '<br>很棒<br>你的眼光很独特<br>查看测试报告',
                nextPage:'/result',
            } 
        }
    }

}
</script>
<style>

</style>

