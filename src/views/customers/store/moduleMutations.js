
export default {
  SET_CUSTOMER ( state, payload ) {
    state.customer=payload
  },
  ADD_ITEM (state, item) {
    state.customers.unshift(item)
  },
  SET_ITEMS (state, items) {
    state.customers = items
  },
  SET_ITEM ( state, items ) {
    state.customers = items
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_ITEM (state, product) {
    const productIndex = state.customers.findIndex((p) => p.id === product.id)
    Object.assign(state.customers[productIndex], product)
  },
  REMOVE_ITEM (state, itemId) {
    const ItemIndex = state.customers.findIndex((p) => p.id === itemId)
    state.customers.splice(ItemIndex, 1)
  },
  SET_PHOTOS(state,payload){
    state.customerPhotos = payload
  }
}
