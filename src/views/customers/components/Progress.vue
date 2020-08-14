<template>
<v-container fluid id='item' style="height:1000px;">
  <v-row>
    <v-col
      cols="12"
      sm="8"
      class="pl-2">
      <v-container fluid class=" mb-2">
        <v-row>
          <v-col class="">
            <v-card class="primary lighten-2" elevation="5">
              <v-row full-width class="v-picker__title  mx-auto ">
                <v-col cols="12" class="text-h6 d-flex justify-space-between align-end">
                  <span>{{$t('customer.estimategrafts') }}</span> <span class="text-body-1">{{visit.estimatedGrafts}}</span>
                </v-col>
                <v-col cols="12" class="text-h6 d-flex justify-space-between align-end ">
                  <span>{{$t('customer.estimateprice') }}</span> <span class="text-body-1">{{visit.estimatedPrice}}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col class="">
            <v-card color="success" elevation="5">
              <v-row full-width class="v-picker__title mx-auto">
                <v-col cols="12" class="text-h6 d-flex justify-space-between align-end">
                  <span>{{$t('customer.currentgrafts') }}</span> <span class="text-body-1">{{visit.currentGrafts}}</span>
                </v-col>
                <v-col cols="12" class="text-h6 d-flex justify-space-between align-end ">
                  <span>{{$t('customer.currentprice') }}</span> <span  class="text-body-1">{{visit.currentPrice ? visit.currentPrice : $t('customer.notcharged')}}</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <transition-group name="list">
        <v-card
          outlined
          class="mb-2"
          key="c1"
          v-show="isHidden(1)">
          <v-toolbar :color="selectedList ? 'secondary lighten-2' : ''">
            <v-toolbar-title
              @click="toggle(1)"
              :class="selectedList ? 'white--text':'secondary--text ' "
              class=" text-h5 text-sm-h4">{{$t('customer.traveldetails') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                icon
                :dark="selectedList ? true:false"
                @click="toggle(1)">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-scroll-y-transition>
            <v-card-text v-show="expand">
              <v-list-item class="px-0">
                <travel :visit="visit" />
              </v-list-item>
            </v-card-text>
          </v-scroll-y-transition>
        </v-card>
        <v-card
          outlined
          class="mb-2"
          key="c2"
          v-show="isHidden(2)">
          <v-toolbar :color="selectedList ? 'secondary lighten-2' : ''">
            <v-toolbar-title
              @click="toggle(2)"
              :class="selectedList ? 'white--text':'secondary--text ' "
              class="text-h5 text-sm-h4">{{$t('customer.payments') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex" v-show="!expand">
              <span class=" info--text font-weight-bold">{{$t('tablefields.received') }} : </span><span class="mr-5">{{ visit.payments.total_received }}</span>
              <span v-if="visit.payments.debt > 0" class="error--text font-weight-bold">{{$t('tablefields.debt') }} : </span><span>{{ visit.payments.debt }}</span>
            </div>
            <v-toolbar-items>
              <v-btn icon @click="toggle(2)">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-scroll-y-transition>
            <v-card-text v-show="expand">
              <v-list-item class="px-0">
                <v-container fluid class="px-0 px-sm-3">
                  <v-card
                    flat
                    outlined
                    class="d-flex grey lighten-4">
                    <v-list-item class="text-h5 d-flex justify-space-between">
                      <div><span class="info--text font-weight-bold">{{$t('tablefields.received') }} : </span>{{ visit.payments.total_received }} </div>
                      <span v-if="visit.payments.debt > 0" class="error--text font-weight-bold">{{$t('tablefields.debt') }} : </span><span>{{ visit.payments.debt }}</span>
                    </v-list-item>
                  </v-card>
                  <v-simple-table class="text-h5">
                    <template v-slot:default>
                      <thead>
                        <tr
                          v-if="index==0"
                          v-for="row,index in visit.payments.income"
                          :key="'th'+index">
                          <th
                            v-for="(col,title,i) in row"
                            v-if="title !='id' && title!='note' && title!='type'"
                            :key="i+title"
                            class="text-left text-h6">{{ $t(`tablefields.${title}`) }} </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="row,index in visit.payments.income"
                          :key="'td'+index"
                          v-if="row.type!='alacak'">
                          <td
                            class="text-left subtitle-2"
                            v-for="col,title,i in row"
                            v-if="title !='id' && title!='note' && title!='type'"
                            :key="title+i">{{ title == 'date' ?  dateFormat(col) : col }} </td>
                        </tr>
                        <tr>
                          <td></td>
                          <th class="text-left subtitle-2 font-weight-bold"> {{$t('tablefields.debt') }}</th>
                          <th class="text-left subtitle-2 font-weight-bold">{{ visit.payments.debt }}</th>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-container>
              </v-list-item>
            </v-card-text>
          </v-scroll-y-transition>
        </v-card>
        <v-card
          outlined
          class="mb-2"
          key="c3"
          v-show="isHidden(3)">
          <v-toolbar :color="selectedList ? 'secondary lighten-2' : ''">
            <v-toolbar-title
              @click="toggle(3)"
              :class="selectedList ? 'white--text':'secondary--text ' "
              class="text-h5 text-sm-h4">{{$t('tablefields.treatment') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex"><span class="info--text font-weight-bold">{{$t('tablefields.totalgrafts') }} : </span>{{ visit.operation.totalGrafts }} </div>
            <v-toolbar-items>
              <v-btn icon @click="toggle(3)">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-scroll-y-transition>
            <v-card-text v-show="expand">
              <v-container class="px-0 pa-sm-3" fluid>
                <v-data-iterator :items="visit.operation.items" hide-default-footer>
                  <template v-slot:default="props">
                    <v-row>
                      <v-col
                        v-for="item in props.items"
                        :key="'o'+item.id"
                        cols="12"
                        sm="6">
                        <v-card color="grey lighten-4">
                          <v-card-title class="subheading font-weight-bold">{{ item.date | moment("Do MMM ,YYYY") }}</v-card-title>
                          <v-divider></v-divider>
                          <v-list dense>
                            <v-list-item
                              v-if="title !='stuff' && title !='id'"
                              v-for="value,title in item"
                              :key="item.id+title">
                              <v-list-item-content>{{ title.toUpperCase().replace(/_/g, " ") }}</v-list-item-content>
                              <v-list-item-content class="justify-end align-end">{{ value }}</v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-col>
                    </v-row>
                  </template>
                </v-data-iterator>
              </v-container>
            </v-card-text>
          </v-scroll-y-transition>
        </v-card>
        <v-card
          outlined
          class="mb-2"
          key="c4"
          v-show="isHidden(4)">
          <v-toolbar :color="selectedList ? 'secondary lighten-2' : ''">
            <v-toolbar-title
              @click="toggle(4)"
              :class="selectedList ? 'white--text':'secondary--text ' "
              class="text-h5 text-sm-h4">{{$t('customer.postop') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon @click="toggle(4)">
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-scroll-y-transition>
            <v-card-text v-show="expand">
              <v-list>
                <v-list-item
                  class="pl-5"
                  v-for="value,title in visit.control.items"
                  :key="title">
                  <v-list-item-content>{{ $t(`customer.${title}`).toUpperCase().replace(/_/g, " ") }}</v-list-item-content>
                  <v-list-item-content class="align-center">
                    <v-icon :color="value ? 'success ':'error'" v-text="value ? 'mdi-check-all':'mdi-minus'"></v-icon>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-scroll-y-transition>
        </v-card>
      </transition-group>
    </v-col>
    <v-col
      cols="12"
      sm="4"
      class="pl-1">
      <v-container fluid class="secondary lighten-2">
        <v-card
          color=""
          elevation="5"
          class="mb-4 pa-2 outlined"
          outlined>
          <v-card-title class="subheading font-weight-bold">{{$t('customer.note') }}</v-card-title>
          {{visit.note}}
        </v-card>
        <v-card
          color=""
          elevation="5"
          class="mb-2 pa-2">
          <v-card-title class="subheading font-weight-bold">{{$t('customer.doctornote') }}
          </v-card-title>
          {{visit.surgery_note}}
        </v-card>

        <a class="text-decoration-none" @click="goToPhotos">
          <v-img :lazy-src="photoGalleryImg"></v-img>
        </a>
      </v-container>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Photos from "./Photos.vue";
import Travel from "./Travel.vue";
export default {
  name: "PatientProgress",
  data() {
    return {
      photoGalleryImg: require("@/assets/images/pages/photogallery.jpg"),
      payed: false,
      stay: "",
      proposal: "",
      totalstay: "",
      cardLists: [1, 2, 3, 4, 5],
      selectedList: "",
      expand: false,
      icons: {
        arrival: "mdi-airplane-landing",
        payments: "mdi-cash-usd",
        operation: "mdi-stethoscope",
        control: "mdi-doctor",
        departure: "mdi-airplane-takeoff"
      },
      alerts: [
        "Patient need to move his own hotel klikya Resort Hotel at 19 June 2020",
        "Departure Transfer Not Set Yet !"
      ]
    };
  },
  props: {
    visit: {
      type: Object,
      default: () => {},
      required: true
    },
    customer: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  components: {
    Travel,
    Photos
  },
  computed: {
    costOfDay() {
      return this.hotelExtraPayments();
    },
    validTravel() {
      return this.validateTravel(this.visit.travel);
    }
  },
  methods: {
    dateFormat(item) {
      return this.$moment(item).format("Do MMM ,dddd");
    },
    goToPhotos() {
      this.$router.push("/customers/gallery/" + this.customer.id);
    },
    validateTravel(itemList) {
      let listOfObjects = Object.keys(itemList).map(key => {
        return !itemList[key] ? false : true;
      });
      console.log("valid", listOfObjects.includes(false));
      return listOfObjects.includes(false);
    },
    toggle(cardNumber) {
      // Assuming each card has unique cardNumber
      let cardList = this.cardLists.find(item => item == cardNumber);
      let liste = Object.keys(this.cardLists).length;
      if (liste != 1) {
        // remove others put only item in list
        // this.cardLists = this.cardLists.filter(x => x == cardNumber);
        this.cardLists = [cardList];
        this.expand = true;
      } else {
        // this item in list reset list to default.
        this.expand = false;
        setTimeout(() => {
          this.cardLists = [1, 2, 3, 4, 5];
        }, 300);
      }
    },
    isHidden(cardNumber) {
      return this.cardLists.findIndex(item => item == cardNumber) > -1;
    },
    hotelExtraPayments() {
      // let checkin = this.$moment(this.visit.hotel.checkin);
      // let checkout = this.$moment(this.visit.hotel.checkout);
      // let arrival = this.$moment(this.visit.arrival.items.arrivalDate);
      // let departure = this.$moment(this.visit.departure.items.departureDate);
      // this.cost = this.visit.hotel.costPer_night;
      // this.proposal = this.visit.hotel.ourProposal;
      // this.totalstay = departure.diff(arrival, 'days');
      // this.stay = checkout.diff(checkin, 'days');
      // return (this.stay - this.proposal) * this.cost;
      // return stay + '  /  ' + proposal + '  /  ' + (stay - proposal) * cost;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-enter,
.list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>
