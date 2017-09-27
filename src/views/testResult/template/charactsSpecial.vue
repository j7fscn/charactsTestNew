<template>
  <div class="resultStyle">
      <p class="likeTitle">我的性格特点 </p>
      <div class="content">
          <div class="subject">
              <p>你是个<span class="subject-color">言行一致</span>的人，</p>
              <p>不念过去也不畏将来，</p>
              <p><span class="subject-color">冷静</span>的面对人生中的变化。</p>
          </div>
          <div class="subject">
              <p>你是个{言行一致}的人，</p>
          </div>
          <div class="subject">
              <p>你是个{言行一致}的人，</p>
              <p>不念过去也不畏将来。</p>
          </div>
          <div class="subject">
              <p>你是个{言行一致}的人，</p>
              <p>不念过去也不畏将来，</p>
              <p>{冷静}的面对人生中的变化。</p>
              <p>把每件事都做成值得回味的纪念。</p>
          </div>
          <div class="subject">
              <p>-设计IN</p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name: 'charactsSpecial',
    props: ['charactsSpecial'],
    mounted() {
    },
}
</script>
<style scoped>
.subject{
    margin-top:.35rem;
}
.subject p{
    margin-top:0;
    margin-bottom: 0;
    margin-right: .34rem;
    line-height: .3rem;
    font-size: .16rem;
    text-align: right;
}
</style>

