import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from 'vuex';
import { RootState } from '@/store';
import state from './state';
import type { State } from './state';
import mutations, { Mutations } from './mutations';
import actions, { Actions } from './actions';
import getters, { Getters } from './getters';

export { State };

export type LayoutStore<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'dispatch' | 'getters'
> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
export default store;
