import axios from "@/plugins/axios.js";

export default {
  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/data-list/products/", { item })
        .then(response => {
          commit("ADD_ITEM", Object.assign(item, { id: response.data.id }));
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchCustomers({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("hello")
        .then(response => {
          commit("SET_ITEMS", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchCustomerDetails({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/customer/detail")
        .then(response => {
          commit("SET_ITEM", response.data[0]);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/api/data-list/products/${item.id}`, { item })
        .then(response => {
          commit("UPDATE_ITEM", response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  removeItem({ commit }, itemId) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/data-list/products/${itemId}`)
        .then(response => {
          commit("REMOVE_ITEM", itemId);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchCustomerPhotos({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `http://localhost/uploadtest/get_list.php?id=${payload.customerId}`
        )
        .then(response => {
          commit("SET_PHOTOS", response.data.photos);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  // eventDragged({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
  //       .then((response) => {

  //         // Convert Date String to Date Object
  //         let event = response.data
  //         event.startDate = new Date(event.startDate)
  //         event.endDate = new Date(event.endDate)

  //         commit('UPDATE_EVENT', event)
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
};
