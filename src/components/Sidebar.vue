<template>
  <div class="fixed bg-slate-800/[.6] h-screen w-full md:w-1/3 lg:w-1/4">
    <router-link to="/">
      <div class="w-full px-6 py-3">
        <img src="@/assets/logo-yc-life.png" />
      </div>
    </router-link>
    <div class="flex flex-col items-center text-gray-200 text-3xl mt-28">
      <router-link to="/mountain" class="my-6 text-green-400">
        <font-awesome-icon :icon="['fas', 'mountain-sun']" class="w-12 pr-4" />
        <span>登山</span>
      </router-link>
      <router-link to="/food" class="my-6">
        <font-awesome-icon :icon="['fas', 'utensils']" class="w-12 pr-4" />
        <span>美食</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { useRoute } from 'vue-router';
  const getRoute = useRoute();
  const route = reactive(getRoute);
  // TODO 響應式路由

  console.log(route);
</script>

<style scoped></style>
