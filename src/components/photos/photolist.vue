<template>
<div class='photolist'>
  <div id="slider" class="mui-slider">
    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">全部</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">时尚摄影</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">家居生活</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">宝贝萌宠</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">诗词歌赋</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">古代美女</a>
        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">电竞手游</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js'
export default {
  mounted () {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005
    })
  }
}
</script>

<style scoped>
*{
  touch-action:pan-y;
}
</style>
