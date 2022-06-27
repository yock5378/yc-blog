import layout, {
  State as LayoutState,
  LayoutStore,
} from '@/store/modules/layout';
import { createStore } from 'vuex';
export type RootState = {
  layout: LayoutState;
};

export type Store = LayoutStore<Pick<RootState, 'layout'>>;

const store = createStore({
  modules: {
    layout,
  },
});
export default store;

export function useStore(): Store {
  return store as Store;
}
