<template>
  <div class="flex">
    <router-view name="Sidebar" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { useStore } from '@/store';
  import LayoutActionTypes from '@/store/modules/layout/action-types';
  import { useResize } from '@/utils/resize';

  const store = useStore();

  store.dispatch(LayoutActionTypes.SET_DEVICE, window.innerWidth);
  useResize(() => {
    store.dispatch(LayoutActionTypes.SET_DEVICE, window.innerWidth);
  }, 100);
</script>
