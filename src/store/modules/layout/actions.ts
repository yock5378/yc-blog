import { Mutations } from './mutations';
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '@/store';
import { State } from './state';
import LayoutActionTypes from './action-types';
import LayoutMutationTypes from './mutation-types';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  // 非同步範例
  // [LayoutActionTypes.SET_DEVICE](
  //   // prettier-ignore
  //   { commit }: AugmentedActionContext
  // ): Promise<boolean>;
  [LayoutActionTypes.SET_DEVICE](
    { commit }: AugmentedActionContext,
    width: number
  ): void;
  [LayoutActionTypes.SET_SIDEBAR_SHOW](
    { commit }: AugmentedActionContext,
    isSidebarShow: boolean
  ): void;
}

const actions: ActionTree<State, RootState> & Actions = {
  // 非同步範例
  // async [LayoutActionTypes.SET_DEVICE]({ commit }) {
  //   return new Promise(() => {
  //     setTimeout(() => {
  //       console.log('SET_DEVICE');
  //       commit(LayoutMutationTypes.SET_DEVICE, 1000);
  //       return true;
  //     }, 500);
  //   });
  // },
  [LayoutActionTypes.SET_DEVICE]({ commit }, width: number) {
    commit(LayoutMutationTypes.SET_DEVICE, width);
  },
  [LayoutActionTypes.SET_SIDEBAR_SHOW]({ commit }, isSidebarShow: boolean) {
    commit(LayoutMutationTypes.SET_SIDEBAR_SHOW, isSidebarShow);
  },
};
export default actions;
