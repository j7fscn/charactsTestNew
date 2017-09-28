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
                title: '很棒你的眼光,<br>很独特查<br>看测试报告',
                nextPage:'/datePick',
            } 
        }
    }

}
</script>
<style>

</style>

