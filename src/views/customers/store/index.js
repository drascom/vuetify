import axios from "@/plugins/axios.js";
const moduleData = {
  isRegistered: false,
  namespaced: true,
  state: {
    customersList: [{
      id: 1,
      active: true,
      name: "Jason Oner",
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      mobile_phone: "+111111111111",
      email: "abcdefg@gmail.com",
      country: "Russia",
      recordedBy: "Kristina",
      status:'1'
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
      avatar: require( "@/assets/images/portrait/small/avatar-s-3.jpg" ),
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
      note: 'this is important area there is note abut patient himself please do not write something related with transfer or surgery.',
      status: "1",
      location: {
        address: "luxury street No:101 Bewerly Hills",
        city: "Los Angeles,California",
        country: "United States"
      },
      visits: [
        {
          id: "1",
          type:'Consultation',
          date: "05-05-2010",
          doctor: "Dr. Ayhan COLAK",
          treatment: "Saç Ekim",
          estimated_graft: "2800",
          estimated_price: "3000 Euros",
          deposits:'300 Euros',
          grafts_total: "3500",
          department: "Anadolu Hastanesi",
          current_price: "2900 Euro",
          status: "Completed",
          status_color: "success",
          notes: "Notes About this visit",
          arrival_date:'02-02-2020',
          departure_date: '05-02-2020',
          arrival_time: '08:30',
          departure_time: '03:30',
          arrival_flight: 'KK-150',
          departure_flight: 'PGS-13',

          seans: {
            "11": {
              id: "11",
              date: "11-11-2011",
              grafts: "2000"
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
          type: 'Treatment',
          date: "01-01-2019",
          doctor: "Dr. Ayhan COLAK",
          treatment: "Saç Ekimi",
          estimated_graft: "3000",
          estimated_price: "2800",
          department: "Ederra Poliklinik",
          current_price: "2500",
          status: "Waiting Payment",
          status_color: "warning",
          notes: "Notes About this visit",
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
          src: require( "@/assets/images/profile/pages/page-01.jpg" ),
          thumbnail: require( "@/assets/images/profile/pages/page-01.jpg" ),
          w: 600,
          h: 400,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: require( "@/assets/images/profile/pages/page-02.jpg" ),
          thumbnail: require( "@/assets/images/profile/pages/page-02.jpg" ),
          w: 1200,
          h: 900
        },
        {
          src: require( "@/assets/images/profile/pages/page-01.jpg" ),
          thumbnail: require( "@/assets/images/profile/pages/page-01.jpg" ),
          w: 600,
          h: 400,
          alt: "some numbers on a grey background" // optional alt attribute for thumbnail image
        },
        {
          src: require( "@/assets/images/profile/pages/page-02.jpg" ),
          thumbnail: require( "@/assets/images/profile/pages/page-02.jpg" ),
          w: 1200,
          h: 900
        }
      ]
    },
  },
  getters: {
    getCustomersList ( state ) {
      return state.customersList
    },
    getCustomer ( state ) {
      return state.customer
    },
    getCustomerPhotos ( state ) {
      return state.customer.photos
    }
  },
  mutations: {
    ADD_ITEM ( state, item ) {
      state.customers.unshift( item )
    },
    SET_ITEMS ( state, items ) {
      state.customers = items
    },
    SET_ITEM ( state, items ) {
      state.customers = items
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_ITEM ( state, product ) {
      const productIndex = state.customers.findIndex( ( p ) => p.id === product.id )
      Object.assign( state.customers[ productIndex ], product )
    },
    REMOVE_ITEM ( state, itemId ) {
      const ItemIndex = state.customers.findIndex( ( p ) => p.id === itemId )
      state.customers.splice( ItemIndex, 1 )
    },
    SET_PHOTOS ( state, payload ) {
      state.customer.photos = payload
    }
  },
  actions: {
    fetchCustomers ( { commit } ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .get( "hello" )
          .then( response => {
            commit( "SET_ITEMS", response.data );
            resolve( response );
          } )
          .catch( error => {
            reject( error );
          } );
      } );
    },
    fetchCustomerDetails ( { commit } ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .get( "/api/customer/detail" )
          .then( response => {
            commit( "SET_ITEM", response.data[ 0 ] );
            resolve( response );
          } )
          .catch( error => {
            reject( error );
          } );
      } );
    },
    fetchCustomerPhotos ( { commit }, payload ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .get(
            `http://localhost/uploadtest/get_list.php?id=${payload.customerId}`
          )
          .then( response => {
            commit( "SET_PHOTOS", response.data.photos );
            // commit( "SET_ERROR", 'dosyalar aktarıldı', { root: true } )
            resolve( response );
          } )
          .catch( error => {
            // commit( "SET_ERROR", error, { root: true })
            reject( error );
          } );
      } );
    },
    updateItem ( { commit }, item ) {
      return new Promise( ( resolve, reject ) => {
        axios
          .post( `/api/data-list/products/${item.id}`, { item } )
          .then( response => {
            commit( "UPDATE_ITEM", response.data );
            resolve( response );
          } )
          .catch( error => {
            reject( error );
          } );
      } );
    },
  }
};

export default moduleData;

