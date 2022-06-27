<template>
  <div class="w-full">
    <Banner />
    <h1>帝雉</h1>
    <h2>999999999</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Banner from '@/components/Banner.vue';
  import useStore from '@/store';

  defineProps<{ msg: string }>();

  const count = ref(0);

  // const store = useStore();
  // console.log(store.state.count);
</script>

<style scoped></style>
