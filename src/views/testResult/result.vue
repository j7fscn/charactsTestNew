<template>
  <div class="page-result">
    <characts-tag></characts-tag>
    <characts-special></characts-special>
    <like-color></like-color>
    <like-style></like-style>
  </div>
</template>
<script>
import charactsTag from './template/charactsTag'
import charactsSpecial from './template/charactsSpecial'
import likeColor from './template/likeColor'
import likeStyle from './template/likeStyle'
export default {
    components: { charactsTag,charactsSpecial,likeColor,likeStyle },
  
}
</script>
<style >
  .page-result {
    background: url(http://owxa0vmjl.bkt.clouddn.com/background.png) center center;

  }
</style>


