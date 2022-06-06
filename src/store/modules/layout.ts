export interface LayoutState {
  name: string;
  isSidebarShow: boolean;
}

const layout = {
  state: () => ({
    name: '',
    isSidebarShow: true,
  }),
  mutations: {
    setLayout(state: LayoutState, name: string) {
      state.name = name;
    },
  },
  // actions: {
  //   setLayout({ commit }) {
  //     commit('setLayout');
  //   },
  // },
  // getters: { ... }
};

export default layout;
