import { onMounted, onBeforeUnmount } from 'vue';
import { useDebounce } from '@/utils/debounce';

export function useResize(fn: Function, delay?: number) {
  const debounced = useDebounce(() => fn(), delay);
  onMounted(() => {
    window.addEventListener('resize', debounced);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', debounced);
  });
}
