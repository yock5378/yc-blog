<template>
  <!-- <div class="parallax">
    <div
      :class="`parallax__back
        ${useMatchUrl('/') ? 'bg-home' : ''}
        ${useMatchUrl('/mountain') ? 'bg-mountain' : ''}
        ${useMatchUrl('/food') ? 'bg-food' : ''}`"
    ></div>

    <div class="parallax__base">99999999</div>
  </div> -->

  <div class="parallax">
    <div :class="`layer__1 ${bgName}`">foo</div>
    <div :class="`layer__2 ${bgName}`">bar</div>
    <div class="layer__3">bazz</div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useMatchUrl } from '@/utils/matchUrl';
  const bgName = ref('');
  if (useMatchUrl('/')) {
    bgName.value = 'bg-home';
  } else if (useMatchUrl('/mountain')) {
    bgName.value = 'bg-mountain';
  } else if (useMatchUrl('/food')) {
    bgName.value = 'bg-food';
  }
</script>

<style scoped>
  .parallax > div {
    position: relative;

    background-attachment: fixed;
    background-position: top center;
    background-size: cover;
  }

  .parallax > div:nth-child(even) {
    box-shadow: inset 0 0 1em #111;
  }

  .parallax .layer__1 {
    height: 100vh;
    filter: grayscale(1) blur(5px);
  }
  .parallax .layer__2 {
    height: 35vh;
  }
  .parallax .layer__3 {
    height: 65vh;
  }
</style>
