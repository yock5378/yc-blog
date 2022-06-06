import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import layout, { LayoutState } from '@/store/modules/layout';

export interface State {
  layout: LayoutState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return baseUseStore(key);
}

const store = createStore<State>({
  modules: {
    layout,
  },
  state: {} as State,
});

export default store;
