

const errors = {
  state: {
    errors:['1 =netework yok','2 = netework yok']
  },
  getters:{
    errors: (state) => state.errors,
  },
  mutations:{
    SET_ERROR: (state, payload) => {
      state.errors = state.errors.push(payload);
    },
  }
}
export default errors;
