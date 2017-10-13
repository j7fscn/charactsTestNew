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
                title: '不错<br>我想我大概了解你的性格了<br>接下来我们来看看这些图<br>谈谈你的看法',
                nextPage:'/likeStyle',
            } 
        }
    }

}
</script>
<style>

</style>

