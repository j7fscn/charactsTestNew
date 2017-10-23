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
                title: '我猜你最后选的<br><span style="color: #F0BD61;">沙发</span><br>我还能知道你是怎样一个人呢<br>在这之前我们要做些准备',
                nextPage:'/datePick',
            } 
        }
    }

}
</script>


