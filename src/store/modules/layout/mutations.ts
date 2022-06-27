import { MutationTree } from 'vuex';
import { State } from './state';
import LayoutMutationTypes from './mutation-types';

export type Mutations<S = State> = {
  [LayoutMutationTypes.SET_DEVICE](state: S, payload: number): void;
  [LayoutMutationTypes.SET_SIDEBAR_SHOW](state: S, payload: boolean): void;
};

const mutations: MutationTree<State> & Mutations = {
  [LayoutMutationTypes.SET_DEVICE](state: State, payload: number) {
    if (payload < 768) {
      state.device = 'mobile';
    } else {
      state.device = 'desktop';
    }
  },
  [LayoutMutationTypes.SET_SIDEBAR_SHOW](state: State, payload: boolean) {
    state.isSidebarShow = payload;
  },
};
export default mutations;
