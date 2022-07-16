<template>
  <div class="relative w-full">
    <ListingPage />
    <div class="content">
      <div>
        <h1>帝雉</h1>
        <h2>999999999</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ListingPage from '@/components/ListingPage.vue';
  import useStore from '@/store';
  import { Console } from 'console';

  defineProps<{ msg: string }>();

  const count = ref(0);

  // const store = useStore();
  // console.log(store.state.count);
  console.log(999);
</script>

<style scoped></style>
