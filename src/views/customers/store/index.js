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
        mobilePhone: "+111111111111",
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
        mobilePhone: "+02222222222",
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
      mobilePhone: "+44 123 456 789",
      landPhone: "+44 123 456 789",
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
          estimatedPrice: "3000 Euros",
          currentPrice: "3000 Euros",
          payment_type: "Credit Card",
          deposits: "300 Euros",
          department: "Anadolu Hastanesi",
          currentPrice: "2900 Euro",
          status: "completed",
          status_color: "success",
          notes: "Notes About this visit",
          arrivalDate: "02-02-2020",
          departureDate: "05-02-2020",
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
          estimatedPrice: "3000 Euros",
          currentPrice: "3000 Euros",
          payment_type: "Cash",
          deposits: "0 Euros",
          department: "Anadolu Hastanesi",
          currentPrice: "3400 Euro",
          status: "Not Confirmed",
          status_color: "warning",
          notes: "Notes About this visit",
          arrivalDate: "02-02-2020",
          departureDate: "05-02-2020",
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
      estimatedGrafts: "2800",
      currentGrafts: "2800",
      estimatedPrice: "3000 Euros",
      currentPrice: "",
      department: "Anadolu Hastanesi",
      note: "Notes About this visit",
      surgery_note:
        "Donor area is too weak.2nd surgery not possible.grafts are too small",
      travel:{
        firstHotel:'Rixos Beldibi',
        firstHotel_checkin:"2020-07-11",
        firstHotel_checkout:"2020-07-14",
        secondHotel:'Hilton Double tree',
        secondHotel_checkin:"2020-07-14",
        secondHotel_checkout:"2020-07-19",
        ourHotel:'Rixos Beldibi',
        ourHotelStatus:true,
        ourProposal:2,
        extraDays:'1',
        extraDaysPayment:false,
        costPerNight:80,
        flights: {
          arrivalDate: "2020-07-11 08:30:00", arrivalFlight: "KK-150", arrivalStatus: true,
          departureDate: "2020-07-19 11:30:00", departureFlight: "PGS-13", departureStatus: true,
        },
        transfers:[
           {date:'2020-07-11',title:'checkin',fromplace:'Airport',toplace:'1 Hotel',confirmed:true,status:true},
           {date:'2020-07-12',fromplace:'Rixos Beldibi hotel',toplace:'Club Pinara Resort',confirmed:true,status:false},
           {date:'2020-07-13',fromplace:'1 Hotel',toplace:'clinic',confirmed:true,status:false},
           {date:'2020-07-14',title:'checkout',fromplace:'1 Hotel',toplace:'2 hotel',confirmed:false,status:false},
           {date:'2020-07-19',fromplace:'2 Hotel',toplace:'airport',confirmed:false,status:false},
        ]
      },
      payments: {
        income: [
          {
            id: "1",
            date: "2020-07-16",
            type: "alacak",
            account: "Operation",
            amount: "3000",
            note: ""
          },
          {
            id: "2",
            date: "2020-07-16",
            type: "gelir",
            account: "Bank Transfer",
            amount: "300",
            note: ""
          },
          {
            id: "3",
            date: "2020-07-16",
            type: "gelir",
            account: "Cash",
            amount: "2500",
            note: "1000 euro , 2000 USD"
          },
        ],
        outgoing:[
          {
            id: "3",
            relatedCustomer:'1',
            date: "2020-07-16",
            type: "borç",
            account: "Cash",
            amount: "100",
            owner:'HRM Turizm',
            note: "2 sefer",
            status:true
          },
          {
            id: "4",
            relatedCustomer:'1',
            date: "2020-07-16",
            type: "borç",
            account: "Bank Transfer",
            owner:'Acenta',
            amount: "1000",
            note: "Agency",
            status:false
          }
        ],
        total_received: "2800",
        debt:"200"
      },
      operation: {
        status: true,
        totalGrafts: '3500',
        items:[
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
    SET_VISIT ( state, payload ) {
      Object.assign(state.activeVisit, payload);
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
    SETPHOTOS(state, payload) {
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
            commit("SETPHOTOS", response.data.photos);
            // commit( "SET_ERROR", 'dosyalar aktarıldı', { root: true } )
            resolve(response);
          })
          .catch(error => {
            // commit( "SET_ERROR", error, { root: true })
            reject(error);
          });
      });
    },
    updateVisit({ commit }, payload) {
      commit("SET_VISIT", payload);
    }
  }
};

export default moduleData;
