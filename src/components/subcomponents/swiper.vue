<template>
<!-- 抽离路由组件 -->
  <div class='swiper'>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="https://p2.ssl.qhimgs1.com/bdr/728__/t016f54160c5c81c652.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="https://p5.ssl.qhimgs1.com/bdr/655__/t01e97565c1a4f62f25.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img.mp.itc.cn/upload/20170807/40193c5428bf40338b7c7628969a9a43_th.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
</script>

<style>
.swiper{
    height:200px;
}

img{
  width:100%;
  height:100%;
}

.mint-swipe-item:nth-child(1) {
  background-color: cyan;
}

.mint-swipe-item:nth-child(2) {
  background-color: pink;
}

.mint-swipe-item:nth-child(3) {
  background-color: lightgreen;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
</style>
