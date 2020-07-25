import axios from "@/plugins/axios.js";
const moduleData = {
  isRegistered: false,
  namespaced: true,
  state: {
    customersList: [
      {
        id: 1,
        active: true,
        name: "Jason Oner",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        mobile_phone: "+111111111111",
        email: "abcdefg@gmail.com",
        country: "Russia",
        recordedBy: "Kristina",
        status: "1"
      },
      {
        id: 2,
        active: false,
        name: "Ranee Carlson",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        mobile_phone: "+02222222222",
        email: "xyz@yahoo.com",
        country: "Russia",
        recordedBy: "Swetlana"
      }
    ],
    customer: {
      id: 1,
      avatar: require("@/assets/images/portrait/small/avatar-s-3.jpg"),
      name: "micheal Jordan",
      dateofbirth: "micheal Jordan",
      gender: "Male",
      email: "a@b.com",
      passaport_no: "a@b.com",
      origin: "Russia",
      mobile_phone: "+44 123 456 789",
      land_phone: "+44 123 456 789",
      recordedBy: "Kristina",
      referencedBy: "Igor Medevev",
      note:
        "this is important area there is note abut patient himself please do not write something related with transfer or surgery.",
      status: "1",
      location: {
        address: "luxury street No:101 Bewerly Hills",
        city: "Los Angeles,California",
        country: "United States"
      },
      visits: [
        {
          id: "1",
          type: "Consultation",
          date: "05-05-2010",
          doctor: "Dr. Ayhan COLAK",
          treatment: "Saç Ekim",
          estimated_grafts: "2800",
          current_grafts: "2800",
          estimated_price: "3000 Euros",
          current_price: "3000 Euros",
          payment_type: "Credit Card",
          deposits: "300 Euros",
          department: "Anadolu Hastanesi",
          current_price: "2900 Euro",
          status: "Completed",
          status_color: "success",
          notes: "Notes About this visit",
          arrival_date: "02-02-2020",
          departure_date: "05-02-2020",
          arrival_time: "08:30",
          departure_time: "03:30",
          arrival_flight: "KK-150",
          departure_flight: "PGS-13",
          surgery_note:
            "Donor area is too weak.2nd surgery not possible.grafts are too small",
          progress: {
            arrived: false,
            charged: false,
            operated: false,
            checked: false,
            departed: false
          },
          sales: {
            "1": {
              id: 1,
              date: "03-02-2020",
              type: ""
            }
          },

          seans: {
            "11": {
              id: "11",
              date: "11-11-2011",
              grafts: "2000",
              stuff: {
                Aslı: "Alım Yaptı",
                HAtice: "Katıldı"
              }
            },
            "33": {
              id: "33",
              date: "12-11-2011",
              grafts: "1500"
            }
          }
        },
        {
          id: "2",
          type: "Treatment",
          date: "01-01-2019",
          doctor: "Dr. Ayhan COLAK",
          treatment: "Saç Ekimi",
          estimated_grafts: "2800",
          current_grafts: "2800",
          estimated_price: "3000 Euros",
          current_price: "3000 Euros",
          payment_type: "Cash",
          deposits: "0 Euros",
          department: "Anadolu Hastanesi",
          current_price: "3400 Euro",
          status: "Not Confirmed",
          status_color: "warning",
          notes: "Notes About this visit",
          arrival_date: "02-02-2020",
          departure_date: "05-02-2020",
          arrival_time: "08:30",
          departure_time: "03:30",
          arrival_flight: "KK-150",
          departure_flight: "PGS-13",
          seans: {
            "22": {
              id: "22",
              date: "22-11-2011"
            }
          }
        }
      ],
      social: {
        facebook: "drayhancolak",
        instagram: "drayhancolak",
        vkontakte: "drayhancolak",
        telegram: "drayhancolak",
        twitter: "drayhancolak"
      },
      photos: [
        {
          src: require("@/assets/images/profile/pages/page-01.jpg"),
          thumbnail: require("@/assets/images/profile/pages/page-01.jpg"),
          w: 600,
          h: 400,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: require("@/assets/images/profile/pages/page-02.jpg"),
          thumbnail: require("@/assets/images/profile/pages/page-02.jpg"),
          w: 1200,
          h: 900
        },
        {
          src: require("@/assets/images/profile/pages/page-01.jpg"),
          thumbnail: require("@/assets/images/profile/pages/page-01.jpg"),
          w: 600,
          h: 400,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: require("@/assets/images/profile/pages/page-02.jpg"),
          thumbnail: require("@/assets/images/profile/pages/page-02.jpg"),
          w: 1200,
          h: 900
        }
      ]
    },
    activeVisit: {
      id: "1",
      type: "Consultation",
      date: "05-05-2010",
      doctor: "Dr. Ayhan COLAK",
      treatment: "Saç Ekim",
      estimated_grafts: "2800",
      current_grafts: "2800",
      estimated_price: "3000 Euros",
      current_price: "3000 Euros",
      deposits: "300 Euros",
      department: "Anadolu Hastanesi",
      current_price: "2900 Euro",
      note: "Notes About this visit",
      surgery_note:
        "Donor area is too weak.2nd surgery not possible.grafts are too small",
      overall_progress: {
        status: "Completed",
        status_color: "success"
      },
      travel:{
        first_hotel:'Rixos Beldibi',
        first_hotel_checkin:"2020-07-11",
        first_hotel_checkout:"2020-07-14",
        second_hotel:'Hilton Double tree',
        second_hotel_checkin:"2020-07-14",
        second_hotel_checkout:"2020-07-19",
        airport_to_hotel:'2020-07-11',
        airport_to_hotel_status:true,
        hotel_to_clinic:'2020-07-12',
        hotel_to_hotel:'2020-07-14',
        hotel_to_hotel_status:false,
        hotel_to_airport:'2020-07-19',
        hotel_to_airport_status:false,
        our_hotel:'Rixos Beldibi',
        our_hotel_status:true,
        our_proposal:2,
        extra_days_payment:false,
        cost_per_night:80,
        arrival_status: true,
        arrival_date: "2020-07-11",
        arrival_time: "08:30",
        arrival_flight: "KK-150",
        departure_status: false,
        departure_date: "2020-07-19",
        departure_time: "03:30",
        departure_flight: "PGS-13"
      },
      payments: {
        status: true,
        items: [
          {
            id: "1",
            date: "2020-07-16",
            type: "debit",
            account: "Operation",
            amount: "3000",
            note: ""
          },
          {
            id: "1",
            date: "2020-07-16",
            type: "credit",
            account: "Bank Transfer",
            amount: "300",
            note: ""
          },
          {
            id: "2",
            date: "2020-07-16",
            type: "credit",
            account: "Cash",
            amount: "2500",
            note: "1000 euro , 2000 USD"
          },
          {
            id: "2",
            date: "2020-07-16",
            type: "debit",
            account: "bank",
            amount: "1000",
            note: "Agency"
          }
        ],
        total_received: "2800",
        debt:'200'
      },
      operation: {
        status: true,
        items: [
          {
            id: "11",
            date: "2020-07-16",
            single_hair_grafts: "100",
            multiple_hair_grafts: "200",
            beard_hair_grafts: "300",
            body_hair_grafts: "400",
            total_grafts: "2000",
            stuff: {
              Aslı: "Alım Yaptı",
              Htice: "Katıldı"
            }
          },
          {
            id: "33",
            date: "2020-07-17",
            total_grafts: "1500"
          }
        ]
      },
      control: {
        status: false,
        items: {
          photos: false,
          washing: false
        }
      },
    }
  },
  getters: {
    getVisit(state) {
      return state.activeVisit;
    },
    getCustomersList(state) {
      return state.customersList;
    },
    getCustomer(state) {
      return state.customer;
    },
    getCustomerPhotos(state) {
      return state.customer.photos;
    }
  },
  mutations: {
    SET_VISIT(state, payload) {
      state.activeVisit = payload;
    },
    SET_CUSTOMER(state, payload) {
      state.customer = payload;
    },
    ADD_ITEM(state, item) {
      state.customers.unshift(item);
    },
    SET_ITEMS(state, items) {
      state.customers = items;
    },
    SET_ITEM(state, items) {
      state.customers = items;
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_ITEM(state, product) {
      const productIndex = state.customers.findIndex(p => p.id === product.id);
      Object.assign(state.customers[productIndex], product);
    },
    REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.customers.findIndex(p => p.id === itemId);
      state.customers.splice(ItemIndex, 1);
    },
    SET_PHOTOS(state, payload) {
      state.customer.photos = payload;
    }
  },
  actions: {
    setVisit({ commit }, payload) {
      commit("SET_VISIT", payload);
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
    fetchCustomerPhotos({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost/uploadtest/get_list.php?id=${payload.customerId}`
          )
          .then(response => {
            commit("SET_PHOTOS", response.data.photos);
            // commit( "SET_ERROR", 'dosyalar aktarıldı', { root: true } )
            resolve(response);
          })
          .catch(error => {
            // commit( "SET_ERROR", error, { root: true })
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
    }
  }
};

export default moduleData;
