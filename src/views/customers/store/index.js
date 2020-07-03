import state from './moduleState.js'
import mutations from './moduleMutations.js'
import actions from './moduleActions.js'
import getters from './moduleGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

