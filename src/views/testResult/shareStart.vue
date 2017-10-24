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
                title: '我会读心术,<br>怎么？不相信？<br>我们可以试试',
                nextPage:'/start?fromShare=1',
            } 
        }
    }

}
</script>
<style>

</style>
