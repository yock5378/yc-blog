export interface LayoutState {
  isSidebarShow: boolean;
}

const layout = {
  state: () => ({
    isSidebarShow: true,
  }),
  mutations: {
    // setLayout(state: LayoutState, name: string) {
    //   state.name = name;
    // },
  },
  // actions: {
  //   setLayout({ commit }) {
  //     commit('setLayout');
  //   },
  // },
  // getters: { ... }
};

export default layout;
