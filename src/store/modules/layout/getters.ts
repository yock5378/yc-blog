import { GetterTree } from 'vuex';
import { RootState } from '@/store';
import { State } from './state';

export type Getters = {
  getDevice(state: State): State['device'];
  getIsSidebarShow(state: State): State['isSidebarShow'];
};

const getters: GetterTree<State, RootState> & Getters = {
  getDevice: (state) => state.device,
  getIsSidebarShow: (state) => state.isSidebarShow,
};
export default getters;
