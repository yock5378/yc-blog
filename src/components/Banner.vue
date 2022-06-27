<template>
  <div
    :class="`w-full h-full bg-cover
      ${useMatchUrl('/') && 'bg-home'}
      ${useMatchUrl('/mountain') && 'bg-mountain'}
      ${useMatchUrl('/food') && 'bg-food'}`"
  ></div>
</template>

<script setup lang="ts">
  import { useMatchUrl } from '@/utils/matchUrl';
</script>

<style scoped></style>
