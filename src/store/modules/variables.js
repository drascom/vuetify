
const variables = {
  state: {
    searchBar:false
  },
  getters: {
    searchBar:(state) =>state.searchBar,

  },
  mutations: {
    SET_SEARCHBAR: (state, payload) => {
      state.searchBar = payload;
    },
  },
  actions: {
    SetSearchBar: async (context, payload) => {
      context.commit('SET_SEARCHBAR', payload);
    },
  }
};

export default variables;
