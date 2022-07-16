<template>
  <div
    v-if="device === 'desktop' || isSidebarShow"
    class="fixed z-10 h-full w-full md:w-1/3 lg:w-1/4 bg-slate-800 bg-opacity-100 md:bg-opacity-80"
  >
    <div class="flex flex-col items-center text-gray-200 text-3xl">
      <div class="px-6 py-3 md:mb-28 mt-16 md:mt-0">
        <router-link to="/">
          <img class="min-w-logo" src="@/assets/logo-yc-life.png" />
        </router-link>
      </div>
      <router-link
        to="/mountain"
        :class="`my-6 ${useMatchUrl('/mountain') && 'text-green-400'}`"
      >
        <font-awesome-icon :icon="['fas', 'mountain-sun']" class="w-12 pr-4" />
        <span>登山</span>
      </router-link>
      <router-link
        to="/food"
        :class="`my-6 ${useMatchUrl('/food') && 'text-green-400'}`"
      >
        <font-awesome-icon :icon="['fas', 'utensils']" class="w-12 pr-4" />
        <span>美食</span>
      </router-link>
    </div>
  </div>
  <div
    v-if="device === 'desktop'"
    class="flex-none z-10 h-full w-full md:w-1/3 lg:w-1/4"
  ></div>
  <button
    v-if="device === 'mobile'"
    class="fixed z-10 top-6 right-6 rounded-full h-10 w-10 bg-gray-200 text-green-600"
    @click="setSidebarShow()"
  >
    <font-awesome-icon
      :icon="isSidebarShow ? ['fas', 'close'] : ['fas', 'bars']"
    />
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useMatchUrl } from '@/utils/matchUrl';
  import { useStore } from '@/store';
  import LayoutActionTypes from '@/store/modules/layout/action-types';
  import { onBeforeRouteLeave } from 'vue-router';

  const store = useStore();
  const device = computed(() => {
    return store.getters.getDevice;
  });
  const isSidebarShow = computed(() => {
    return store.getters.getIsSidebarShow;
  });

  const setSidebarShow = (set?: boolean): void => {
    let setState = set !== undefined ? set : !isSidebarShow.value;
    store.dispatch(LayoutActionTypes.SET_SIDEBAR_SHOW, setState);
  };

  onBeforeRouteLeave((to, from) => {
    setSidebarShow(false);
  });
</script>

<style scoped></style>
