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
                title: '准备好了吗<br>我们开始了',
                nextPage:'/sex',
            } 
        }
    }

}
</script>
<style>

</style>

