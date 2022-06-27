import { watch } from 'vue';
import { useRoute } from 'vue-router';

export function useMatchUrl(url: String): Boolean {
  const route = useRoute();
  let currentPath = route.path;
  watch(
    () => route.path,
    (go) => {
      currentPath = go;
    }
  );
  return currentPath === url;
}
