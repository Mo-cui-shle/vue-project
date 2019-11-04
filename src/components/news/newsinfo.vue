<template>
<div class='newsinfo'>
  <h3 class='title'>新闻标题</h3>
  <p class='subtitle'>
    <span>发表时间:2019/10/1</span>
    <span>点击次数：0</span>
  </p>
  <hr>
  <comment></comment>
</div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  components: {
    comment
  }
}
</script>

<style scoped>
.newsinfo{
    padding:0 4px;
}

.title{
    font-size:16px;
    text-align:center;
    margin:15px 0;
}

.subtitle{
    font-size:13px;
    color:#226aff;
    display:flex;
    justify-content:space-between;
}
</style>
